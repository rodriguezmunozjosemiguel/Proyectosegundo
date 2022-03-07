
//Quieren un nuevo registro datado por comunidades sobre el descuento producido en las vacuna pfizer,
//que dependiendo  del precio base es mayor o igual 19 el descuento se hara de un 30% y sino de un 20%  
db.vacunas.aggregate(
    [
       {
           $unwind:{path:"$vacunas"}
       },
       { 
           $project:
           {
                _id:0,
                vacunas: 1,
                id:1,
                comunidad:1,
                descuento:
                {
                  $cond:{if:{$gte:["$vacunas.coste",19]},then:30,else:20}
                }
            }
        },
        {
             $match : { "vacunas.name": "Pfizer" } 
        },
        {
            $project:
            {
                id:1,
                name:"$vacunas.name",
                descuento:1,
                comunidad:1
            }
        }  
    ]).pretty()


//Se quiere documentar sobre la efectividad de las vacunas,dado que las que tienen un porcentaje menor a 90 no son muy efectivas
 db.vacunas.aggregate(
    [   
        {
            $unwind:"$vacunas"
        },
        {
            $project:
               {
                 id:1,
                 _id: 0,
                 vacunas: 1,
                 efectividad: { $cmp: [ "$vacunas.caracteristicas.eficacia_porcentaje", 90] }
               }
          },
          {
              $project:
              {
                  name:"$vacunas.name",
                  id:1,
                  eficacia_porcentaje:"$vacunas.caracteristicas.eficacia_porcentaje",
                  efectividad:1   
              }
          }
    ]).pretty()

//El hsopital quiere un documento en el que aparezca los dias de importe de las vacunas, que sean superior o igual al 2021-12-00 y menor o igual al 2022-03-00,
//acompañado del coste total de las vacunas y su media.

 db.vacunas.aggregate(
    [
        {
            $unwind:"$vacunas"
        },       
        {
            $match : { "vacunas.Dia_de_importe": { $gte: new ISODate("2021-12-00"), $lte: new ISODate("2022-03-00") } }
        },
        {
            $group : 
            {
                _id : { $dateToString: { format: "%Y-%m-%d", date: "$vacunas.Dia_de_importe" } },
                totaldecoste: { $sum: { $multiply: [ "$vacunas.coste", "$vacunas.dosis_recibidas" ] } },
                cantidadmedia: { $avg: "$vacunas.dosis_recibidas"}
            }
        },
        {
         $sort : { _id:1 }
        }
    ]
 ).pretty()
        

 //Se quiere crear una ficha de datos sobre el transporte de las vacuanas,queriendo saber cuál es la primera carga y última carga de vacunas enviadas,
 //además la media del tiempo de llegada,para así saber que descuento aplicarse si uno de 40 o de 30,ya que dependiendo si es mayor o igual 15h,
 //se le aplicará uno de 40 y sino uno de 20,conociendo así el descuento que se le aplica al coste del transporte.

 db.vacunas.aggregate(
    [

        {
            $project:
            {
              transportador:1,
              costetrans:1,
              _id:0,
              first: { $arrayElemAt: [ "$envios", 0 ] },
              last: { $arrayElemAt: [ "$envios", -1 ] },
              tiempodellegada: { $avg:"$Tiempollegada"},
            }
        },
        {
            $project:
            {
              transportador:1,
              first:1,
              last:1,
              tiempodellegada:1,
              costetrans:1,
              _id:0,
              descuentos:
                {
                  $cond:{if:{$gte:["$tiempodellegada",15]},then:40,else:10}
                }
                
             }
        },
        {
            $project:
            {
              transportador:1,
              first:1,
              last:1,
              tiempodellegada:1,
              descuentos:1,
              costetrans:1,
              _id:0,
              descuentodeltrans:{$round:[{$divide: [{$multiply:["$descuentos","$costetrans"]},100]},0]}
            }
              
        },
        {
            $out:{db:"test",coll:"docxxtransporte"}
        }  
    ]).pretty()


//La base de datos por comunidad autónoma está desactualizada para ser actualizada,se debe incluir en ellas las dosis desperdiciadas,
//los  informes de actividad de la vacuna y los de transporte
db.vacunas.aggregate( 
     [
         {
            $unwind:"$vacunas"
         },
         {
            $project:
            {   
              comunidad:1,
              id:1,
              _id: 0,
              vacunas: 1,
              transportador:1,
              dosisdesperdiciadas:{ $round:[{$subtract:[{$multiply:["$vacunas.dosis_recibidas","$vacunas.coste"]},
              {$multiply:["$vacunas.dosis_administradas","$vacunas.coste"]}]}]}
            } 
        },
        {
            $project:
            {
               comunidad:1,
               id:1,
               _id: 0,
               vacunas: 1,
               transportador:1,
               vacunasdesperdiciadas: { $cmp: [ "$dosisdesperdiciadas", 0] }
            }
        },
        {
            $project:
            {
                name:"$vacunas.name",
                comunidad:1,
                vacunasdesperdiciadas:1,
                id:1, 
                transportador:1,       
            }
        },
        {
            $lookup:
            {
                from: "Informedeactividaddelprocesodevacunación",
                localField: "id",
                foreignField: "_id",
                as: "totaldatosdevacunaporcomunidad"
            }
        },
        {
            $lookup:
            {
                from:"docxxtransporte",
                localField:"transportador",
                foreignField:"transportador",
                as:"datostransporte"
            } 
        },
        {
            $addFields:{
                datostransportes:{
                    $arrayElemAt:["$datostransporte",0]
                }
            }
        },
        { $unset:"datostransporte"  },
        {
            $out:{db:"documento",coll:"informe"}
        }
    ] ).pretty()

db.getSiblingDB("documento").informe.find().pretty()

//Los científicos quieren saber cuál comunidad está inmunizada,para saber cuales vacunas son duraderas y así aplicar un nuevo componente para reforzar a las vacunas
db.vacunas.aggregate(
         [
            {
                $unwind:"$vacunas"
            },
            {
                $match:{"población_inmunizada":true}
            },
            {
                $project:
                {           
                    _id:0,
                    comunidad:1,
                    "vacunas.name":1,
                    "vacunas.caracteristicas.composicion":1,
                    tiempodeduracion:
                    {
                        $cond:{if:{$gte:["$vacunas.caracteristicas.dias_de_inmunidad_aprox",180]},then:"Si es duradera",else:"No es duradera"}
                    } 
                }    
            },
            { 
                $addFields: {"vacunas.caracteristicas.composicion": "ALC" } 
            },
            {
                $project:
                {   
                    _id:0,
                    comunidad:1,
                    "vacunas.name":1,
                    tiempodeduracion:1,
                    composicion:"$vacunas.caracteristicas.composicion"
                }
            },
            {
                $project:
                {   
                    _id:0,
                    comunidad:1,
                    "vacunas.name":1,
                    tiempodeduracion:1,
                    "nuevocomponente":"$composicion"
                }
            }
        ]).pretty()


  


    

    
      