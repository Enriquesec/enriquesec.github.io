const imagenes = [
   {"answers": "AI", "imagen": "/assets/img/album_ai_or_art/ai_1.png", "mensaje": 'Luna nueva en un fondo oscuro en medio de mal"'},
   {"answers": "AI", "imagen": "/assets/img/album_ai_or_art/ai_2.png", "mensaje": 'Un paisaje nórdico con una escena de combate simulada entre dos barcos cerca de un volcán."'},
   {"answers": "AI", "imagen": "/assets/img/album_ai_or_art/ai_3.png", "mensaje": 'Sombra de tenis colgados en un poste en una noche sombria"'},
   {"answers": "AI", "imagen": "/assets/img/album_ai_or_art/ai_4.png", "mensaje": 'Sol oscuro y una sombra de un angel con alas."'},
   {"answers": "AI", "imagen": "/assets/img/album_ai_or_art/ai_5.jpeg", "mensaje": 'Una X encerrada dentro de un círculo, con pequeños detalles intrincados con estilo gotico. "'},
   {"answers": "AI", "imagen": "/assets/img/album_ai_or_art/ai_6.png", "mensaje": 'La sombra de una figura en medio de una niebla colorida. "'},
   {"answers": "AI", "imagen": "/assets/img/album_ai_or_art/ai_7.png", "mensaje": 'Tunel oscuro. "'},
   {"answers": "AI", "imagen": "/assets/img/album_ai_or_art/ai_8.png", "mensaje": 'Figuras geometricas imperfectas en un fondo negro, darles un grosor amplio y agrega pequeños puntos blancos como si fueran errores de impresion"'},
   {"answers": "AI", "imagen": "/assets/img/album_ai_or_art/ai_9.png", "mensaje": 'Bosque oscuro con un cerillo encendido. Colores apagados y no tan finos. "'},
   {"answers": "AI", "imagen": "/assets/img/album_ai_or_art/ai_10.png", "mensaje": 'Fondo blanco con un simbolo en color gris. Colores apagados y no tan finos. "'},
   {"answers": "AI", "imagen": "/assets/img/album_ai_or_art/ai_11.png", "mensaje": 'Sombras de humanos bailando bajo un arcoiris. Colores apagados y no tan finos."'},
   {"answers": "AI", "imagen": "/assets/img/album_ai_or_art/ai_12.png", "mensaje": 'Paisaje de un campo con una montaña atras, en una noche lluviosa. Pon letras nordicas en la parte superior. Colores apagados y no tan finos."'},
   {"answers": "AI", "imagen": "/assets/img/album_ai_or_art/ai_13.png", "mensaje": 'Espejo empañado reflejando un espectro y letras en el, con una lampara arriba. Colores muy apagados y con calidad baja."'},
   {"answers": "AI", "imagen": "/assets/img/album_ai_or_art/ai_14.png", "mensaje": 'Violin en el mar en una noche oscura."'},
   {"answers": "AI", "imagen": "/assets/img/album_ai_or_art/ai_15.png", "mensaje": 'Una escena de un caballo en un desierto desde una perspectiva aérea alta, como visto desde arriba, corriendo hacia un agujero negro distante. El caballo es pequeño. "'},
   {"answers": "AI", "imagen": "/assets/img/album_ai_or_art/ai_16.png", "mensaje": 'Una escena en un bosque que representa a un hada perseguida por lobos. El hada es pequeña y delicada, con alas translúcidas que brillan en los tonos moteados en un ambiente tenebroso. Con baja calidad, como si se tomara con una camara antigua"'},
   {"answers": "AI", "imagen": "/assets/img/album_ai_or_art/ai_17.png", "mensaje": 'Caida al vacio, escribe space en una esquina. "'},
   {"answers": "AI", "imagen": "/assets/img/album_ai_or_art/ai_18.png", "mensaje": 'Dibujo de banda de metal  ponle un titulo a la banda. "'},
   {"answers": "AI", "imagen": "/assets/img/album_ai_or_art/ai_19.png", "mensaje": 'Espejo que refleja el futuro de una ciudad en ruinas (contaminada y destriuda)  de manera teneblosa. "'},
   {"answers": "AI", "imagen": "/assets/img/album_ai_or_art/ai_20.jpeg", "mensaje": 'Espejo y una ciudad destruida contaminada. "'},
   {"answers": "AI", "imagen": "/assets/img/album_ai_or_art/ai_21.jpeg", "mensaje": 'Angel tocando la guitarra de metal. "'},
   {"answers": "AI", "imagen": "/assets/img/album_ai_or_art/ai_22.png", "mensaje": 'Bruja en el circulo junglar. "'},
   {"answers": "AI", "imagen": "/assets/img/album_ai_or_art/ai_23.jpeg", "mensaje": 'Dibujo de los integrandes de una banda de metal. "'},
   {"answers": "Art", "imagen": "/assets/img/album_ai_or_art/art_1.jpg", "mensaje": 'The Hunting Party (2014) de Linkin Park"'},
   {"answers": "Art", "imagen": "/assets/img/album_ai_or_art/art_2.jpg", "mensaje": 'Helvetios (2012) de Eluveitie"'},
   {"answers": "Art", "imagen": "/assets/img/album_ai_or_art/art_3.jpg", "mensaje": 'Past to Present 1977-1990 (1990) de Toto." <br><span style="font-size: 12px;">**La imagen no es la original: fue recortada.</span>'},
   {"answers": "Art", "imagen": "/assets/img/album_ai_or_art/art_4.jpg", "mensaje": 'Draw the Line (1977) de Aerosmith." <br><span style="font-size: 12px;">**La imagen no es la original: fue recortada.</span>'},
   {"answers": "Art", "imagen": "/assets/img/album_ai_or_art/art_5.jpg", "mensaje": 'Transcender (2020) de DLD."<br><span style="font-size: 12px;">**La imagen no es la original: fue recortada.</span>'},
   {"answers": "Art", "imagen": "/assets/img/album_ai_or_art/art_6.jpg", "mensaje": 'Come Clarity (2006) de In Flames. "'},
   {"answers": "Art", "imagen": "/assets/img/album_ai_or_art/art_7.jpg", "mensaje": 'Siren Charms (2014) de In Flames. "'},
   {"answers": "Art", "imagen": "/assets/img/album_ai_or_art/art_8.jpg", "mensaje": 'I Love You (2013) de The Neighbourhood. " <br><span style="font-size: 12px;">**La imagen no es la original: fue recortada.</span>'},
   {"answers": "Art", "imagen": "/assets/img/album_ai_or_art/art_9.jpg", "mensaje": 'Wiped Out! (2015) de The Neighbourhood. " <br><span style="font-size: 12px;">**La imagen no es la original: fue recortada.</span>'},
   {"answers": "Art", "imagen": "/assets/img/album_ai_or_art/art_10.jpg", "mensaje": 'La Leyenda De La Mancha (1998) de Mago de Oz." <br><span style="font-size: 12px;">**La imagen no es la original: fue recortada.</span>'},
   {"answers": "Art", "imagen": "/assets/img/album_ai_or_art/art_11.jpg", "mensaje": 'All Good Songs (2016) de All Good Songs." <br><span style="font-size: 12px;">**La imagen no es la original: fue recortada.</span>'},
   {"answers": "Art", "imagen": "/assets/img/album_ai_or_art/art_12.jpeg", "mensaje": 'Alpha (2007) de Sevendust." <br><span style="font-size: 12px;">**La imagen no es la original: fue recortada.</span>'},
   {"answers": "Art", "imagen": "/assets/img/album_ai_or_art/art_13.jpg", "mensaje": 'Living Things (2012) de Linkin Park." <br><span style="font-size: 12px;">**La imagen no es la original: fue recortada.</span>'},
   {"answers": "Art", "imagen": "/assets/img/album_ai_or_art/art_14.jpg", "mensaje": 'Californication (1999) de Red Hot Chili Peppers." <br><span style="font-size: 12px;">**La imagen no es la original: fue recortada.</span>'},
   {"answers": "Art", "imagen": "/assets/img/album_ai_or_art/art_15.jpg", "mensaje": 'Demons (2013) de Imagine Dragons." <br><span style="font-size: 12px;">**La imagen no es la original: fue recortada.</span>'},
   {"answers": "Art", "imagen": "/assets/img/album_ai_or_art/art_16.jpeg", "mensaje": 'Out Of Ashes (2009) de Dead By Sunrise." <br><span style="font-size: 12px;">**La imagen no es la original: fue recortada.</span>'},
   {"answers": "Art", "imagen": "/assets/img/album_ai_or_art/art_17.jpeg", "mensaje": 'Phenomenon (2003) de Thousand Foot Krutch." <br><span style="font-size: 12px;">**La imagen no es la original: fue recortada.</span>'},
   {"answers": "Art", "imagen": "/assets/img/album_ai_or_art/art_18.jpeg", "mensaje": 'Us and Them (2005) de Shinedown." <br><span style="font-size: 12px;">**La imagen no es la original: fue recortada.</span>'},
   {"answers": "Art", "imagen": "/assets/img/album_ai_or_art/art_19.jpeg", "mensaje": 'Finding Beauty in Negative Spaces (2007) de Seether." <br><span style="font-size: 12px;">**La imagen no es la original: fue recortada.</span>'},
   {"answers": "Art", "imagen": "/assets/img/album_ai_or_art/art_20.jpeg", "mensaje": 'Appeal to Reason (2008) de Rise Against." <br><span style="font-size: 12px;">**La imagen no es la original: fue recortada.</span>'},
   {"answers": "Art", "imagen": "/assets/img/album_ai_or_art/art_21.jpeg", "mensaje": 'Wretched and Divine: The Story of the Wild Ones (2013) de Black Veil Brides." <br><span style="font-size: 12px;">**La imagen no es la original: fue recortada.</span>'},
   {"answers": "Art", "imagen": "/assets/img/album_ai_or_art/art_22.jpeg", "mensaje": 'Waking the Fallen (2003) de Avenged Sevenfold." <br><span style="font-size: 12px;">**La imagen no es la original: fue recortada.</span>'},
   {"answers": "Art", "imagen": "/assets/img/album_ai_or_art/art_23.jpg", "mensaje": 'We Are Not Alone (2004) de Breaking Benjamin." <br><span style="font-size: 12px;">**La imagen no es la original: fue recortada.</span>'},

]