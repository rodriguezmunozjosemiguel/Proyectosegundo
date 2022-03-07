
            db.vacunas.drop();
            db.vacunas.insertMany([
                {
                    id:01,
                    comunidad:"Andalucía",
                    vacunas:[
                        {
                            name:"Pfizer",
                            dosis_recibidas:7031790,
                            company:{
                              nombre:"BioNTech",
                              CIF:"H43892869"},
                            dosis_administradas:7007402,
                            coste:19.50,
                            caracteristicas:{
                                composicion:["Lípidos","Ácido ribonucleico mensajero","Sales","azúcares"],
                                eficacia_porcentaje:95,
                                dias_de_inmunidad_aprox:180,
                                tipo:"ARNm"
                            },
                            Dia_de_importe: ISODate("2021-12-02T08:00:00Z"),
                        },
                        {
                            name:"Moderna",
                            dosis_recibidas:1193300,
                            company:{
                              nombre:"Moderna",
                              CIF:"P89317381"},
                            dosis_administradas:1140724,
                            coste:21,
                            caracteristicas:{
                                composicion:["Lípidos","Ácido ribonucleico mensajero","Sal","azúcar","estabilizadores de ácidos y ácido"],
                                eficacia_porcentaje:94,
                                dias_de_inmunidad_aprox:180,
                                tipo:"ARNm"
                            },
                            Dia_de_importe: ISODate("2021-12-01T08:00:00Z")
                        },
                        {
                          name:"Janssen",
                          dosis_recibidas:525450,
                          company:{
                            nombre:"Janssen Pharmaceuticals Companies of Johnson & Johnson",
                            CIF:"A091341277"},
                          dosis_administradas:285879,
                          coste:13,
                          caracteristicas:{
                              composicion:["Una versión inofensiva de un virus no relacionado con el virus del COVID-19","azúcares","sales","ácido y estabilizador de ácido"],                            
                              eficacia_porcentaje:85,
                              dias_de_inmunidad_aprox:240,
                              tipo:"Vector adenovirus"
                            },
                            Dia_de_importe: ISODate("2021-08-03T08:00:00Z")
                        }
                    ],
                    transportador:"FRIO TRUCK 2020 SL",
                    envios:["Pfizer_Moderna","Moderna","Janssen","Pfizer_Janssen"],
                    costetrans:5000,
                    Tiempollegada:[25,23],
                    población_inmunizada: true
                },
                {
                    id:02,
                    comunidad:"Castilla-La Mancha",
                    vacunas:[
                        {
                          name:"AstraZeneca",
                          dosis_recibidas:382100,
                          company:{
                            nombre:"AstraZeneca",
                            CIF:"Z130392674"},
                          dosis_administradas:370000,
                          coste:12,
                          caracteristicas:{
                              composicion:["Ácido etilendiaminotetraacético","cloruro de sodio","Sacarosa","Etanol","L-Histidina"],                            
                              eficacia_porcentaje:70,
                              dias_de_inmunidad_aprox:120,
                              tipo:"Vector adenovirus"
                            },
                            Dia_de_importe: ISODate("2021-06-12T08:00:00Z"),
                        },
                        {
                          name:"Pfizer",
                          dosis_recibidas:1675761,
                          company:{
                            nombre:"BioNTech",
                            CIF:"H43892869"},
                          dosis_administradas:146531,
                          coste:20,
                          caracteristicas:{
                              composicion:["Lípidos","Ácido ribonucleico mensajero","Sales","azúcares"],                            
                              eficacia_porcentaje:95,
                              dias_de_inmunidad_aprox:180,
                              tipo:"ARNm"
                            },
                            Dia_de_importe: ISODate("2021-11-16T08:00:00Z")
                        }
                    ],
                    transportador:"TRANSPORTES LOS CURVITAS SL",
                    envios:["Pfizer","Astrazeneca_Pfizer","Astrazeneca"],
                    costetrans:7000,
                    Tiempollegada:[23,18],
                    población_inmunizada: false
                },
                {
                    id:03,
                    comunidad:"Aragón",
                    vacunas:[
                        {
                          name:"Moderna",
                          dosis_recibidas:328490,
                          company:{
                            nombre:"Moderna",
                            CIF:"P89317381"},
                          dosis_administradas:300000,
                          coste:17,
                          caracteristicas:{
                              composicion:["Lípidos","Ácido ribonucleico mensajero","Sal","azúcar","estabilizadores de ácidos y ácido"],                            
                              eficacia_porcentaje:94,
                              dias_de_inmunidad_aprox:180,
                              tipo:"ARNm"
                            },
                            Dia_de_importe: ISODate("2021-06-12T08:00:00Z")
                        },
                        {
                          name:"Astrazeneca",
                          dosis_recibidas:255200,
                          company:{
                            nombre:"Astrazeneca",
                            CIF:"Z130392674"},
                          dosis_administradas:255200,
                          coste:14,
                          caracteristicas:{
                              composicion:["Ácido etilendiaminotetraacético","cloruro de sodio","Sacarosa","Etanol","L-Histidina"],                            
                              eficacia_porcentaje:70,
                              dias_de_inmunidad_aprox:120,
                              tipo:"Vector adenovirus"
                            },
                            Dia_de_importe: ISODate("2021-03-10T08:00:00Z")
                        }
                    ],
                    transportador:"TRANS TAMARA 2019 SL",
                    envios:["Astrazeneca_Moderna","Moderna","Astrazeneca","Moderna_Astrazeneca"],
                    costetrans:8000,
                    Tiempollegada:[12,7],
                    población_inmunizada: true
                },
                {
                    id:04,
                    comunidad:"Asturias",
                    vacunas:[
                        {
                          name:"Pfizer",
                          dosis_recibidas:1430645,
                          company:{
                            nombre:"BioNTech",
                            CIF:"H43892869"},
                          dosis_administradas:1201342,
                          coste:19,
                          caracteristicas:{
                              composicion:["Lípidos","Ácido ribonucleico mensajero","Sales","azúcares"],                            
                              eficacia_porcentaje:95,
                              dias_de_inmunidad_aprox:180,
                              tipo:"ARNm"
                            },
                            Dia_de_importe: ISODate("2021-04-15T08:00:00Z")
                        },
                        {
                            name:"Novavax",
                            dosis_recibidas:100000,
                            company:{
                              nombre:"Novavax",
                              CIF:"K21572139"},
                            dosis_admiNistradas:80000,
                            coste:15.50,
                            caracteristicas:{
                                composicion:["Lípidos","Ácido ribonucleico mensajero","Sales","azúcares"],                            
                                eficacia_porcentaje:89.3,
                                dias_de_inmunidad_aprox:150,
                                tipo:"Proteína S"
                              },
                              Dia_de_importe: ISODate("2021-12-04T08:00:00Z")
                          }
                    ],
                    transportador:"TRANSCANHER SL",
                    envios:["Novavax","Novavax_Pfizer","Pfizer","Pfizer"],
                    costetrans:6000,
                    Tiempollegada:[12,8],
                    población_inmunizada: true
                },
                {
                    id:05,
                    comunidad:"Baleares",
                    vacunas:[
                        {
                          name:"Pfizer",
                          dosis_recibidas:1318884,
                          company:{
                            nombre:"BioNTech",
                            CIF:"H43892869"},
                          dosis_administradas:1300000,
                          coste:17.50,
                          caracteristicas:{
                              composicion:["Lípidos","Ácido ribonucleico mensajero","Sales","azúcares"],                            
                              eficacia_porcentaje:95,
                              dias_de_inmunidad_aprox:180,
                              tipo:"ARNm"
                            },
                            Dia_de_importe: ISODate("2021-11-16T08:00:00Z")
                        },
                        {
                         name:"Moderna",
                         dosis_recibidas:335070,
                         company:{
                             nombre:"Moderna",
                             CIF:"P89317381"},
                         dosis_administradas:322090,
                         coste:15,
                         caracteristicas:{
                             composicion:["Lípidos","Ácido ribonucleico mensajero","Sal","azúcar","estabilizadores de ácidos y ácido"],                            
                             eficacia_porcentaje:94,
                             dias_de_inmunidad_aprox:180,
                             tipo:"ARNm"
                         },
                         Dia_de_importe: ISODate("2021-07-30T08:00:00Z")  
                        },
                        {
                         name:"Astrazeneca",
                         dosis_recibidas:225400,
                         company:{
                             nombre:"Astrazeneca",
                             CIF:"Z130392674"},
                         dosis_administradas:210500,
                         coste:15,
                         caracteristicas:{
                             composicion:["Ácido etilendiaminotetraacético","cloruro de sodio","Sacarosa","Etanol","L-Histidina"],                            
                             eficacia_porcentaje:70,
                             dias_de_inmunidad_aprox:120,
                             tipo:"Vector adenovirus"
                              },
                              Dia_de_importe: ISODate("2021-10-20T08:00:00Z")
                          },
                          {
                            name:"Janssen",
                            dosis_recibidas:56420,
                            company:{
                              nombre:"Janssen Pharmaceuticals Companies of Johnson & Johnson",
                              CIF:"A091341277"},
                            dosis_administradas:50000,
                            coste:10,
                            caracteristicas:{
                                composicion:["Una versión inofensiva de un virus no relacionado con el virus del COVID-19","azúcares","sales","ácido y estabilizador de ácido"],                            
                                eficacia_porcentaje:85,
                                dias_de_inmunidad_aprox:240,
                                tipo:"Vector adenovirus"
                              },
                              Dia_de_importe: ISODate("2021-03-02T08:00:00Z")  
                          }

                    ],
                    transportador:"RAFACOR S.L",
                    envios:["Moderna_Pfizer_Janssen","Pfizer_Moderna","Pfizer","Moderna","Astrazeneca","Janssen_Moderna"],
                    costetrans:7700,
                    Tiempollegada:[16,13],
                    población_inmunizada: false
                },
                {
                    id:06,
                    comunidad:"Canarias",
                    vacunas:[
                        {
                          name:"Pfizer",
                          dosis_recibidas:2403150,
                          company:{
                            nombre:"BioNTech",
                            CIF:"H43892869"},
                          dosis_administradas:2050950,
                          coste:16.80,
                          caracteristicas:{
                              composicion:["Lípidos","Ácido ribonucleico mensajero","Sales","azúcares"],                            
                              eficacia_porcentaje:95,
                              dias_de_inmunidad_aprox:180,
                              tipo:"ARNm"
                            },
                            Dia_de_importe: ISODate("2021-09-22T08:00:00Z")  
                        },
                        {
                            name:"Moderna",
                            dosis_recibidas:574700,
                            company:{
                                nombre:"Moderna",
                                CIF:"P89317381"},
                            dosis_administradas:540600,
                            coste:21.50,
                            caracteristicas:{
                                composicion:["Lípidos","Ácido ribonucleico mensajero","Sal","azúcar","estabilizadores de ácidos y ácido"],                            
                                eficacia_porcentaje:94,
                                dias_de_inmunidad_aprox:180,
                                tipo:"ARNm"
                            },
                            Dia_de_importe: ISODate("2021-06-11T08:00:00Z")   
                           },
                           {
                            name:"Janssen",
                            dosis_recibidas:1336503,
                            company:{
                              nombre:"Janssen Pharmaceuticals Companies of Johnson & Johnson",
                              CIF:"A091341277"},
                            dosis_administradas:1250544,
                            coste:12.75,
                            caracteristicas:{
                                composicion:["Una versión inofensiva de un virus no relacionado con el virus del COVID-19","azúcares","sales","ácido y estabilizador de ácido"],                            
                                eficacia_porcentaje:85,
                                dias_de_inmunidad_aprox:240,
                                tipo:"Vector adenovirus"
                              },
                              Dia_de_importe: ISODate("2021-05-14T08:00:00Z")
                          }
                    ],
                    transportador:"TRANSHOR SCA",
                    envios:["Moderna_Janssen","Pfizer_Moderna","Pfizer","Janssen","Janssen_Pfizer"],
                    costetrans:7500,
                    Tiempollegada:[27,25],
                    población_inmunizada: false
                },
                {
                    id:07,
                    comunidad:"Cantrabia",
                    vacunas:[
                        {
                         name:"Astrazeneca",
                         dosis_recibidas:125200,
                         company:{
                           nombre:"Astrazeneca",
                           CIF:"Z130392674"},
                         dosis_administradas:122100,
                         coste:13,
                         caracteristicas:{
                          composicion:["Ácido etilendiaminotetraacético","cloruro de sodio","Sacarosa","Etanol","L-Histidina"],                            
                          eficacia_porcentaje:70,
                          dias_de_inmunidad_aprox:120,
                          tipo:"Vector adenovirus"
                        },
                        Dia_de_importe: ISODate("2021-08-07T08:00:00Z")
                        },
                        {
                            name:"Sanofi Pasteur",
                            dosis_recibidas:22200,
                            company:{
                              nombre:"Sanofi-Pasteur y GSK",
                              CIF:"T98108212"},
                            dosis_administradas:15400,
                            coste:9,
                            caracteristicas:{
                             composicion:"proteína Spike",                            
                             eficacia_porcentaje:72,
                             dias_de_inmunidad_aprox:"",
                             tipo:"Proteína S"
                           },
                           Dia_de_importe: ISODate("2021-12-20T08:00:00Z") 
                           }
                    ],
                    transportador:"MF ASISTENCIA SL.",
                    envios:["Sanofi_Pasteur","Astrazeneca","Sanofi_Pasteur_Astrazeneca"],
                    costetrans:7900,
                    Tiempollegada:[4,2],
                    población_inmunizada: true
                },
                {
                    id:08,
                    comunidad:"Castilla y León",
                    vacunas:[
                        {
                          name:"Pfizer",
                          dosis_recibidas:3867399,
                          company:{
                            nombre:"BioNTech",
                            CIF:"H43892869"},
                          dosis_administradas:3653369,
                          coste:18.90,
                          caracteristicas:{
                              composicion:["Lípidos","Ácido ribonucleico mensajero","Sales","azúcares"],                            
                              eficacia_porcentaje:95,
                              dias_de_inmunidad_aprox:180,
                              tipo:"ARNm"
                            },
                            Dia_de_importe: ISODate("2021-09-06T08:00:00Z")  
                        },
                        {
                            name:"Janssen",
                            dosis_recibidas:97620,
                            company:{
                              nombre:"Janssen Pharmaceuticals Companies of Johnson & Johnson",
                              CIF:"A091341277"},
                            dosis_administradas:80310,
                            coste:12.75,
                            caracteristicas:{
                                composicion:["Una versión inofensiva de un virus no relacionado con el virus del COVID-19","azúcares","sales","ácido y estabilizador de ácido"],                            
                                eficacia_porcentaje:85,
                                dias_de_inmunidad_aprox:240,
                                tipo:"Vector adenovirus"
                              },
                              Dia_de_importe: ISODate("2021-06-05T08:00:00Z") 
                          },
                          {
                            name:"Valneva",
                            dosis_recibidas:5750,
                            company:{
                              nombre:"Valneva SE",
                              CIF:"N940229382"},
                            dosis_administradas:5100,
                            coste:15.37,
                            caracteristicas:{
                                composicion:"Virus inactivo",                            
                                eficacia_porcentaje:80,
                                dias_de_inmunidad_aprox:"",
                                tipo:"Virus inactivo"
                              },
                              Dia_de_importe: ISODate("2022-01-15T08:00:00Z")  
                          }
                             
                    ],
                    transportador:"JAPIRTRANS",
                    envios:["Valnevar","Janssen","Janssen_Valnevar"],
                    costetrans:8900,
                    Tiempollegada:[17,14],
                    población_inmunizada: true
                },
                {
                    id:09,
                    comunidad:"Cataluña",
                    vacunas:[
                        {
                          name:"Pfizer",
                          dosis_recibidas:8469080,
                          company:{
                            nombre:"BioNTech",
                            CIF:"H43892869"},
                          dosis_administradas:8469080,
                          coste:22.50,
                          caracteristicas:{
                              composicion:["Lípidos","Ácido ribonucleico mensajero","Sales","azúcares"],                            
                              eficacia_porcentaje:95,
                              dias_de_inmunidad_aprox:180,
                              tipo:"ARNm"
                            },
                            Dia_de_importe: ISODate("2021-04-23T08:00:00Z")  
                        },
                        {
                         name:"Moderna",
                         dosis_recibidas:2004900,
                         company:{
                             nombre:"Moderna",
                             CIF:"P89317381"},
                         dosis_administradas:2000000,
                         coste:18,
                         caracteristicas:{
                             composicion:["Lípidos","Ácido ribonucleico mensajero","Sal","azúcar","estabilizadores de ácidos y ácido"],                            
                             eficacia_porcentaje:94,
                             dias_de_inmunidad_aprox:180,
                             tipo:"ARNm"
                         },
                         Dia_de_importe: ISODate("2021-07-31T08:00:00Z")    
                        },
                        {
                         name:"Astrazeneca",
                         dosis_recibidas:1514300,
                         company:{
                             nombre:"Astrazeneca",
                             CIF:"Z130392674"},
                         dosis_administradas:1404400,
                         coste:17,
                         caracteristicas:{
                             composicion:["Ácido etilendiaminotetraacético","cloruro de sodio","Sacarosa","Etanol","L-Histidina"],                            
                             eficacia_porcentaje:70,
                             dias_de_inmunidad_aprox:120,
                             tipo:"Vector adenovirus"
                              },
                              Dia_de_importe: ISODate("2021-04-17T08:00:00Z")  
                          },
                          {
                            name:"Janssen",
                            dosis_recibidas:375750,
                            company:{
                              nombre:"Janssen Pharmaceuticals Companies of Johnson & Johnson",
                              CIF:"A091341277"},
                            dosis_administradas:356750,
                            coste:12,
                            caracteristicas:{
                                composicion:["Una versión inofensiva de un virus no relacionado con el virus del COVID-19","azúcares","sales","ácido y estabilizador de ácido"],                            
                                eficacia_porcentaje:85,
                                dias_de_inmunidad_aprox:240,
                                tipo:"Vector adenovirus"
                              },
                              Dia_de_importe: ISODate("2021-11-10T08:00:00Z")  
                          }
                    ],
                    transportador:"IMPEX",
                    envios:["Astrazeneca_Janssen","Janssen","Moderna","Pfizer","Janssen"],
                    costetrans:9700,
                    Tiempollegada:[10,8],
                    población_inmunizada: false

                },
                {
                    id:10,
                    comunidad:"C. Valenciana",
                    vacunas:[
                        {
                          name:"Pfizer",
                          dosis_recibidas:6256180,
                          company:{
                            nombre:"BioNTech",
                            CIF:"H43892869"},
                          dosis_administradas:6159510,
                          coste:20.50,
                          caracteristicas:{
                              composicion:["Lípidos","Ácido ribonucleico mensajero","Sales","azúcares"],                            
                              eficacia_porcentaje:95,
                              dias_de_inmunidad_aprox:180,
                              tipo:"ARNm"
                            },
                            Dia_de_importe: ISODate("2021-06-18T08:00:00Z")
                        },
                        {
                         name:"Moderna",
                         dosis_recibidas:1543650,
                         company:{
                             nombre:"Moderna",
                             CIF:"P89317381"},
                         dosis_administradas:1113690,
                         coste:16,
                         caracteristicas:{
                             composicion:["Lípidos","Ácido ribonucleico mensajero","Sal","azúcar","estabilizadores de ácidos y ácido"],                            
                             eficacia_porcentaje:94,
                             dias_de_inmunidad_aprox:180,
                             tipo:"ARNm"
                         },
                         Dia_de_importe: ISODate("2021-04-09T08:00:00Z")    
                        },
                        {
                         name:"Astrazeneca",
                         dosis_recibidas:863900,
                         company:{
                             nombre:"Astrazeneca",
                             CIF:"Z130392674"},
                         dosis_administradas:812200,
                         coste:16,
                         caracteristicas:{
                             composicion:["Ácido etilendiaminotetraacético","cloruro de sodio","Sacarosa","Etanol","L-Histidina"],                            
                             eficacia_porcentaje:70,
                             dias_de_inmunidad_aprox:120,
                             tipo:"Vector adenovirus"
                              },
                              Dia_de_importe: ISODate("2021-05-30T08:00:00Z")
                          },
                          {
                            name:"Janssen",
                            dosis_recibidas:213125,
                            company:{
                              nombre:"Janssen Pharmaceuticals Companies of Johnson & Johnson",
                              CIF:"A091341277"},
                            dosis_administradas:200115,
                            coste:13,
                            caracteristicas:{
                                composicion:["Una versión inofensiva de un virus no relacionado con el virus del COVID-19","azúcares","sales","ácido y estabilizador de ácido"],                            
                                eficacia_porcentaje:85,
                                dias_de_inmunidad_aprox:240,
                                tipo:"Vector adenovirus"
                              },
                              Dia_de_importe: ISODate("2021-09-09T08:00:00Z")
                          },
                          {
                            name:"Valneva",
                            dosis_recibidas:3935,
                            company:{
                              nombre:"Valneva SE",
                              CIF:"N940229382"},
                            dosis_administradas:3134,
                            coste:14,
                            caracteristicas:{
                                composicion:"Virus inactivo",                            
                                eficacia_porcentaje:80,
                                dias_de_inmunidad_aprox:"",
                                tipo:"Virus inactivo"
                              },
                              Dia_de_importe: ISODate("2022-01-13T08:00:00Z") 
                          }
                    ],
                    transportador:"TRANSPORTES MIALFER SL",
                    envios:["Astrazeneca_Janssen_Valneva_Pfizer","Janssen","Moderna","Pfizer","Valneva"],
                    costetrans:8700,
                    Tiempollegada:[15,13],
                    población_inmunizada: true
                },
                {
                    id:11,
                    comunidad:"Extremadura",
                    vacunas:[
                        {
                          name:"Pfizer",
                          dosis_recibidas:1464233,
                          company:{
                            nombre:"BioNTech",
                            CIF:"H43892869"},
                          dosis_administradas:1123233,
                          coste:19.50,
                          caracteristicas:{
                              composicion:["Lípidos","Ácido ribonucleico mensajero","Sales","azúcares"],                            
                              eficacia_porcentaje:95,
                              dias_de_inmunidad_aprox:180,
                              tipo:"ARNm"
                            },
                            Dia_de_importe: ISODate("2021-07-27T08:00:00Z") 
                        },
                        {
                         name:"Moderna",
                         dosis_recibidas:231770,
                         company:{
                             nombre:"Moderna",
                             CIF:"P89317381"},
                         dosis_administradas:275780,
                         coste:17,
                         caracteristicas:{
                             composicion:["Lípidos","Ácido ribonucleico mensajero","Sal","azúcar","estabilizadores de ácidos y ácido"],                            
                             eficacia_porcentaje:94,
                             dias_de_inmunidad_aprox:180,
                             tipo:"ARNm"
                         },
                         Dia_de_importe: ISODate("2021-08-28T08:00:00Z")     
                        },
                        {
                         name:"Astrazeneca",
                         dosis_recibidas:185400,
                         company:{
                             nombre:"Astrazeneca",
                             CIF:"Z130392674"},
                         dosis_administradas:145900,
                         coste:14,
                         caracteristicas:{
                             composicion:["Ácido etilendiaminotetraacético","cloruro de sodio","Sacarosa","Etanol","L-Histidina"],                            
                             eficacia_porcentaje:70,
                             dias_de_inmunidad_aprox:120,
                             tipo:"Vector adenovirus"
                              },
                              Dia_de_importe: ISODate("2021-10-16T08:00:00Z") 
                          }
                    ],
                    transportador:"RAMJOMAT",
                    envios:["Astrazeneca_Moderna_Pfizer","Moderna","Moderna","Pfizer","Astrazeneca"],
                    costetrans:6000,
                    Tiempollegada:[22,19],
                    población_inmunizada: true
                },
                {
                    id:12,
                    comunidad:"Galicia",
                    vacunas:[
                        {
                          name:"Pfizer",
                          dosis_recibidas:3874579,
                          company:{
                            nombre:"BioNTech",
                            CIF:"H43892869"},
                          dosis_administradas:2774639,
                          coste:20,
                          caracteristicas:{
                              composicion:["Lípidos","Ácido ribonucleico mensajero","Sales","azúcares"],                            
                              eficacia_porcentaje:95,
                              dias_de_inmunidad_aprox:180,
                              tipo:"ARNm"
                            },
                            Dia_de_importe: ISODate("2021-09-19T08:00:00Z")  
                        },
                        {
                         name:"Moderna",
                         dosis_recibidas:537400,
                         company:{
                             nombre:"Moderna",
                             CIF:"P89317381"},
                         dosis_administradas:556800,
                         coste:17,
                         caracteristicas:{
                             composicion:["Lípidos","Ácido ribonucleico mensajero","Sal","azúcar","estabilizadores de ácidos y ácido"],                            
                             eficacia_porcentaje:94,
                             dias_de_inmunidad_aprox:180,
                             tipo:"ARNm"
                         },
                         Dia_de_importe: ISODate("2021-08-05T08:00:00Z")    
                        },
                        {
                         name:"Astrazeneca",
                         dosis_recibidas:573400,
                         company:{
                             nombre:"Astrazeneca",
                             CIF:"Z130392674"},
                         dosis_administradas:456400,
                         coste:12,
                         caracteristicas:{
                             composicion:["Ácido etilendiaminotetraacético","cloruro de sodio","Sacarosa","Etanol","L-Histidina"],                            
                             eficacia_porcentaje:70,
                             dias_de_inmunidad_aprox:120,
                             tipo:"Vector adenovirus"
                              },
                              Dia_de_importe: ISODate("2021-07-11T08:00:00Z")  
                          },
                          {
                            name:"Sanofi Pasteur",
                            dosis_recibidas:15200,
                            company:{
                              nombre:"Sanofi-Pasteur y GSK",
                              CIF:"T98108212"},
                            dosis_administradas:10100,
                            coste:9,
                            caracteristicas:{
                             composicion:"proteína Spike",                            
                             eficacia_porcentaje:72,
                             dias_de_inmunidad_aprox:"",
                             tipo:"Proteína S"
                           },
                           Dia_de_importe: ISODate("2022-02-10T08:00:00Z") 
                           }
                    ],
                    transportador:"PEREZCANO",
                    envios:["Sanofi_Pasteur_Moderna_Pfizer","Astrazeneca","Moderna","Pfizer","Sanofi_Pasteur"],
                    costetrans:7500,
                    Tiempollegada:[10,7],
                    población_inmunizada: true
                },
                {
                    id:13,
                    comunidad:"La Rioja",
                    vacunas:[
                        {
                          name:"Pfizer",
                          dosis_recibidas:421265,
                          company:{
                            nombre:"BioNTech",
                            CIF:"H43892869"},
                          dosis_administradas:390895,
                          coste:21,
                          caracteristicas:{
                              composicion:["Lípidos","Ácido ribonucleico mensajero","Sales","azúcares"],                            
                              eficacia_porcentaje:95,
                              dias_de_inmunidad_aprox:180,
                              tipo:"ARNm"
                            },
                            Dia_de_importe: ISODate("2021-10-21T08:00:00Z")
                        }
                      ],
                    transportador:"TRANSANI",
                    envios:["Pfizer","Pfizer"],
                    costetrans:6000,
                    Tiempollegada:[9,6],
                    población_inmunizada: true
                },
                {
                    id:14,
                    comunidad:"Madrid",
                    vacunas:[
                        {
                          name:"Pfizer",
                          dosis_recibidas:8099835,
                          company:{
                            nombre:"BioNTech",
                            CIF:"H43892869"},
                          dosis_administradas:8000821,
                          coste:22,
                          caracteristicas:{
                              composicion:["Lípidos","Ácido ribonucleico mensajero","Sales","azúcares"],                            
                              eficacia_porcentaje:95,
                              dias_de_inmunidad_aprox:180,
                              tipo:"ARNm"
                            },
                            Dia_de_importe: ISODate("2021-05-07T08:00:00Z")
                        },
                        {
                         name:"Moderna",
                         dosis_recibidas:1820800,
                         company:{
                             nombre:"Moderna",
                             CIF:"P89317381"},
                         dosis_administradas:1500100,
                         coste:19,
                         caracteristicas:{
                             composicion:["Lípidos","Ácido ribonucleico mensajero","Sal","azúcar","estabilizadores de ácidos y ácido"],                            
                             eficacia_porcentaje:94,
                             dias_de_inmunidad_aprox:180,
                             tipo:"ARNm"
                         },
                         Dia_de_importe: ISODate("2021-05-19T08:00:00Z")
                        },
                        {
                         name:"Astrazeneca",
                         dosis_recibidas:1222100,
                         company:{
                             nombre:"Astrazeneca",
                             CIF:"Z130392674"},
                         dosis_administradas:1141112,
                         coste:14,
                         caracteristicas:{
                             composicion:["Ácido etilendiaminotetraacético","cloruro de sodio","Sacarosa","Etanol","L-Histidina"],                            
                             eficacia_porcentaje:70,
                             dias_de_inmunidad_aprox:120,
                             tipo:"Vector adenovirus"
                              },
                              Dia_de_importe: ISODate("2021-04-12T08:00:00Z")
                          },
                          {
                            name:"Janssen",
                            dosis_recibidas:321450,
                            company:{
                              nombre:"Janssen Pharmaceuticals Companies of Johnson & Johnson",
                              CIF:"A091341277"},
                            dosis_administradas:301880,
                            coste:11,
                            caracteristicas:{
                                composicion:["Una versión inofensiva de un virus no relacionado con el virus del COVID-19","azúcares","sales","ácido y estabilizador de ácido"],                            
                                eficacia_porcentaje:85,
                                dias_de_inmunidad_aprox:240,
                                tipo:"Vector adenovirus"
                              },
                              Dia_de_importe: ISODate("2021-08-02T08:00:00Z")  
                          },
                          {
                            name:"Valneva",
                            dosis_recibidas:2000,
                            company:{
                              nombre:"Valneva SE",
                              CIF:"N940229382"},
                            dosis_administradas:1000,
                            coste:13,
                            caracteristicas:{
                                composicion:"Virus inactivo",                            
                                eficacia_porcentaje:80,
                                dias_de_inmunidad_aprox:"",
                                tipo:"Virus inactivo"
                              },
                              Dia_de_importe: ISODate("2022-01-17T08:00:00Z") 
                          },
                          {
                            name:"Sanofi Pasteur",
                            dosis_recibidas:11300,
                            company:{
                              nombre:"Sanofi-Pasteur y GSK",
                              CIF:"T98108212"},
                            dosis_administradas:9100,
                            coste:9,
                            caracteristicas:{
                             composicion:"proteína Spike",                            
                             eficacia_porcentaje:72,
                             dias_de_inmunidad_aprox:"",
                             tipo:"Proteína S"
                           },
                           Dia_de_importe: ISODate("2022-01-22T08:00:00Z") 
                           }
                    ],
                    transportador:"TRANSGOMRO",
                    envios:["Sanofi_Pasteur_Valneva","Pfizer","Janssen","Moderna","Astrazeneca","Valneva"],
                    costetrans:10700,
                    Tiempollegada:[18,16],
                    población_inmunizada: true
                },
                {   
                    id:15,
                    comunidad:"Murcia",
                    vacunas:[
                        {
                         name:"Moderna",
                         dosis_recibidas:498000,
                         company:{
                             nombre:"Moderna",
                             CIF:"P89317381"},
                         dosis_administradas:423000,
                         coste:17,
                         caracteristicas:{
                             composicion:["Lípidos","Ácido ribonucleico mensajero","Sal","azúcar","estabilizadores de ácidos y ácido"],                            
                             eficacia_porcentaje:94,
                             dias_de_inmunidad_aprox:180,
                             tipo:"ARNm"
                         },
                         Dia_de_importe: ISODate("2021-06-01T08:00:00Z")    
                        },
                        {
                         name:"Astrazeneca",
                         dosis_recibidas:253010,
                         company:{
                             nombre:"Astrazeneca",
                             CIF:"Z130392674"},
                         dosis_administradas:220010,
                         coste:13,
                         caracteristicas:{
                             composicion:["Ácido etilendiaminotetraacético","cloruro de sodio","Sacarosa","Etanol","L-Histidina"],                            
                             eficacia_porcentaje:70,
                             dias_de_inmunidad_aprox:120,
                             tipo:"Vector adenovirus"
                              },
                              Dia_de_importe: ISODate("2021-09-14T08:00:00Z")
                            }
                          ],
                          transportador:"TRANSPORTES ALMERIMAR",
                          envios:["Moderna","Astrazeneca"],
                          costetrans:8000,
                          Tiempollegada:[22,20],
                          población_inmunizada: true  
                          },
                     {   
                        id:16,
                        comunidad:"Navarra",
                        vacunas:[
                               {
                                 name:"Moderna",
                                 dosis_recibidas:151500,
                                 company:{
                                     nombre:"Moderna",
                                     CIF:"P89317381"},
                                 dosis_administradas:123700,
                                 coste:17,
                                 caracteristicas:{
                                     composicion:["Lípidos","Ácido ribonucleico mensajero","Sal","azúcar","estabilizadores de ácidos y ácido"],                            
                                     eficacia_porcentaje:94,
                                     dias_de_inmunidad_aprox:180,
                                     tipo:"ARNm"
                                 },
                                 Dia_de_importe: ISODate("2021-10-19T08:00:00Z")     
                                },
                                {
                                 name:"Astrazeneca",
                                 dosis_recibidas:136600,
                                 company:{
                                     nombre:"Astrazeneca",
                                     CIF:"Z130392674"},
                                 dosis_administradas:123800,
                                 coste:13.50,
                                 caracteristicas:{
                                     composicion:["Ácido etilendiaminotetraacético","cloruro de sodio","Sacarosa","Etanol","L-Histidina"],                            
                                     eficacia_porcentaje:70,
                                     dias_de_inmunidad_aprox:120,
                                     tipo:"Vector adenovirus"
                                      },
                                      Dia_de_importe: ISODate("2021-07-23T08:00:00Z")
                                  },
                                  {
                                    name:"Janssen",
                                    dosis_recibidas:23750,
                                    company:{
                                      nombre:"Janssen Pharmaceuticals Companies of Johnson & Johnson",
                                      CIF:"A091341277"},
                                    dosis_administradas:21890,
                                    coste:12,
                                    caracteristicas:{
                                        composicion:["Una versión inofensiva de un virus no relacionado con el virus del COVID-19","azúcares","sales","ácido y estabilizador de ácido"],                            
                                        eficacia_porcentaje:85,
                                        dias_de_inmunidad_aprox:240,
                                        tipo:"Vector adenovirus"
                                      },
                                      Dia_de_importe: ISODate("2021-06-18T08:00:00Z")
                                    }
                                  ],
                                  transportador:"DANFERPRAT",
                                  envios:["Moderna_Janssen","Astrazeneca_Janssen"],
                                  costetrans:8200,
                                  Tiempollegada:[5,3],
                                  población_inmunizada: true  
                                  },
                                  {   
                                    id:17,
                                    comunidad:"País Vasco",
                                    vacunas:[
                                         {
                                            name:"Pfizer",
                                            dosis_recibidas:2748150,
                                            company:{
                                              nombre:"BioNTech",
                                              CIF:"H43892869"},
                                            dosis_administradas:2600150,
                                            coste:20,
                                            caracteristicas:{
                                                composicion:["Lípidos","Ácido ribonucleico mensajero","Sales","azúcares"],                            
                                                eficacia_porcentaje:95,
                                                dias_de_inmunidad_aprox:180,
                                                tipo:"ARNm"
                                              },
                                              Dia_de_importe: ISODate("2021-04-11T08:00:00Z")
                                          },
                                           {
                                             name:"Moderna",
                                             dosis_recibidas:526100,
                                             company:{
                                                 nombre:"Moderna",
                                                 CIF:"P89317381"},
                                             dosis_administradas:513100,
                                             coste:15,
                                             caracteristicas:{
                                                 composicion:["Lípidos","Ácido ribonucleico mensajero","Sal","azúcar","estabilizadores de ácidos y ácido"],                            
                                                 eficacia_porcentaje:94,
                                                 dias_de_inmunidad_aprox:180,
                                                 tipo:"ARNm"
                                             },
                                             Dia_de_importe: ISODate("2021-06-23T08:00:00Z")     
                                            },
                                            {
                                             name:"Astrazeneca",
                                             dosis_recibidas:444200,
                                             company:{
                                                 nombre:"Astrazeneca",
                                                 CIF:"Z130392674"},
                                             dosis_administradas:422100,
                                             coste:13.50,
                                             caracteristicas:{
                                                 composicion:["Ácido etilendiaminotetraacético","cloruro de sodio","Sacarosa","Etanol","L-Histidina"],                            
                                                 eficacia_porcentaje:70,
                                                 dias_de_inmunidad_aprox:120,
                                                 tipo:"Vector adenovirus"
                                                  },
                                                  Dia_de_importe: ISODate("2021-08-09T08:00:00Z") 
                                              },
                                              {
                                                name:"Janssen",
                                                dosis_recibidas:101300,
                                                company:{
                                                  nombre:"Janssen Pharmaceuticals Companies of Johnson & Johnson",
                                                  CIF:"A091341277"},
                                                dosis_administradas:100800,
                                                coste:13,
                                                caracteristicas:{
                                                    composicion:["Una versión inofensiva de un virus no relacionado con el virus del COVID-19","azúcares","sales","ácido y estabilizador de ácido"],                            
                                                    eficacia_porcentaje:85,
                                                    dias_de_inmunidad_aprox:240,
                                                    tipo:"Vector adenovirus"
                                                  },
                                                  Dia_de_importe: ISODate("2021-05-11T08:00:00Z") 
                                              },
                                              {
                                                name:"Sanofi Pasteur",
                                                dosis_recibidas:9800,
                                                company:{
                                                  nombre:"Sanofi-Pasteur y GSK",
                                                  CIF:"T98108212"},
                                                dosis_administradas:7900,
                                                coste:9,
                                                caracteristicas:{
                                                 composicion:"proteína Spike",                            
                                                 eficacia_porcentaje:72,
                                                 dias_de_inmunidad_aprox:"",
                                                 tipo:"Proteína S"
                                               },
                                               Dia_de_importe: ISODate("2022-02-07T08:00:00Z")
                                               }
                                              ],
                                              transportador:"DANFERPRAT",
                                              envios:["Moderna_Janssen","Pfizer","Astrazeneca_Janssen_Sanofi_Pasteur"],
                                              costetrans:9000,
                                              Tiempollegada:[4,2],
                                              población_inmunizada: true
                                            }
                    
                                  ]
                                )