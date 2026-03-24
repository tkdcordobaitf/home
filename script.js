const TUL_KEYS_ORDER = [
  "sajujirugi",
  "sajumakgi",
  "chonji",
  "dangun",
  "dosan",
  "wonhyo",
  "yulgok",
  "joonggun",
  "toigye",
  "hwarang",
  "choongmoo",
  "kwangae",
  "poeum",
  "gebaek",
  "euiam",
  "choongjang",
  "juche",
  "choiyong",
  "samil",
  "yoosin",
];

const tules = {
  sajujirugi: {
    name: "Saju Jirugi",
    gup: "Gup 10",
    video: "",
    description: "Cruz de Ataque.",
    belt: "Blanco",
    diagram: "Cruz",
    qtyMovements: 7,
    junbi: "Narani Junbi Sogi",
    start: "Pie derecho",
    finish: "Pie derecho",
    movements: [],
    times: [],
  },
  sajumakgi: {
    name: "Saju Makgi",
    gup: "Gup 10",
    video: "",
    description: "Cruz de defensa.",
    belt: "Blanco",
    diagram: "Cruz",
    qtyMovements: 8,
    junbi: "Narani Junbi Sogi",
    start: "Pie derecho",
    finish: "Pie derecho",
    movements: [],
    times: [],
  },
  chonji: {
    name: "Chon-ji",
    gup: "Gup 9",
    video: "4vAdfbs0Rlo",
    description:
      "Aignifica literalmente 'El Cielo - La Tierra'. Esto es interpretado en  Oriente como la creación del mundo o el principio de la historia de la Humanidad, por tal motivo este tul es ejecutado por el principiante. Consiste en dos partes similares: una representa el Cielo y la otra, la Tierra.",
    belt: "Blanco punta Amarilla",
    diagram: "Cruz",
    qtyMovements: 19,
    junbi: "Narani Junbi Sogi",
    start: "Pie izquierdo",
    finish: "Pie izquierdo",
    movements: [
      "Desplazar el pie izquierdo hacia B formando una posición para caminar con un bloqueo bajo con antebrazo izquierdo",
      "Desplazar el pie derecho a B realizando un golpe de puño con la derecha al pecho",
      "Desplazar el pie derecho a A girando en sentido de las agujas del reloj (por el lado del puño o espalda) llegando a una posicion para caminar con una defensa baja con antabrazo derecho",
      "Desplazar el pie izquierdo a A logrando una posicion para caminar con un golpe de puño izquierdo al pecho",
      "Desplazar el pie izquierdo a D realizando una defensa baja con canto de mano izquierdo",
      "Desplazar el pie derecho a D formando una posicion para caminar con un puño al pecho con la derecha",
      "Desplazar el pie derecho a C girando en sentido delas agujas del reloj (por el lado del puño o espalda) para formar una posicion para caminar con un bloqueo bajo con antebrezo derecho",
      "Desplazar el pie izquierdo a C formando una posicion para caminar con un puño al pecho con la izquierda",
      "Desplazar el pie izquierdo a A formando una posicion 'L' haciendo una defenza con canto de mano a zona media con el antebrazo izquierdo",
      "Desplazar el pie derechoa a A formando una posicion para caminar con un puño al pecho con la derecha",
      "Desplazar el pie derecho a B girando en sentido de las agujas del reloj (por el lado del puño o espalda) formando una posicion en 'L' haciendo un defensa a altura media con atebrazo derecho",
      "Desplazar el pie izquierdo a B formando una posicion para caminar con un puño al pecho con la izquierda",
      "Dezplazar el pie izquierdo a C girando en sentido de las agujas del reloj (por el lado del puño o espalda) formando una posicion en 'L' haciendo una defensa a altura media con antebrazo izquierdo",
      "Dezplazar el pie derecho a C formandi una posicion para caminar con un puño al pecho con la derecha",
      "Desplazar el pie derecho a D girando en sentido de las agujas del reloj (por el lado del puño o espalda) formando una posicion en 'L' haciendo una defensa a altura media con antebrazo derecho",
      "Desplazar el pie izquierdo a D formando una posicion para caminar con un puño al pecho con la izquierda",
      "Desplazar el pie derecho a D formando una posicion para caminar con un puño al pecho con la derecha",
      "Desplazar el pie derecho a C (dar un paso hacia atras) formando una posicion para caminar con un puño al pecho con la izquierda",
      "Desplazar el pie izquierdo a C (dar un paso hacia atras) formando una posicion para caminar con un golpe de puño al pecho con la derecha",
    ],
    times: [
      "0m01.984s",
      "0m03.526s",
      "0m05.317s",
      "0m06.867s",
      "0m08.508s",
      "0m10.075s",
      "0m11.943s",
      "0m13.433s",
      "0m14.951s",
      "0m16.669s",
      "0m18.220s",
      "0m19.839s",
      "0m21.709s",
      "0m23.320s",
      "0m25.030",
      "0m26.622s",
      "0m28.204s",
      "0m29.861s",
      "0m31.465s",
    ],
  },
  dangun: {
    name: "Dan Gun",
    gup: "Gup 8",
    video: "",
    description:
      "Es el nombre del Santo Legendario fundador de Corea en el 2333 A.C. (Antes de Cristo)",
    belt: "Amarillo",
    diagram: "Doble T",
    qtyMovements: 21,
    junbi: "Narani Junbi Sogi",
    start: "Pie izquierdo",
    finish: "Pie izquierdo",
    movements: [],
    times: [],
  },
  dosan: {
    name: "Do San",
    gup: "Gup 7",
    video: "",
    description:
      "Es el seudónim del patriota Ahn-Chan-Ho (1876-1938) que luchó por la educación e independencia de Corea. Los 24 movimientos representan su vida.",
    belt: "Amarillo punta Verde",
    diagram: "Z invertida",
    qtyMovements: 24,
    junbi: "Narani Junbi Sogi",
    start: "Pie izquierdo",
    finish: "Pie derecho",
    movements: [],
    times: [],
  },
  wonhyo: {
    name: "Won-Hyo",
    gup: "Gup 6",
    video: "",
    description:
      "Monje que introdujo el budismo durante la dinastía silla en el 686 A.C. (Antes de Cristo)",
    belt: "Verde",
    diagram: "Doble T",
    qtyMovements: 28,
    junbi: "Moa Sogi Junbi A",
    start: "Pie izquierdo",
    finish: "Pie derecho",
    movements: [],
    times: [],
  },
  yulgok: {
    name: "Yul-Gok",
    gup: "Gup 5",
    video: "",
    description:
      "Seudónimo del maestro Yil, apodado el “Confucio de corea”. Los 38 movimientos representan la latitud donde nació. El diagrama representa al maestro.",
    belt: "Verde punta Azul",
    diagram: "Cruz Escolástica",
    qtyMovements: 38,
    junbi: "Narani Junbi Sogi",
    start: "Pie izquierdo",
    finish: "Pie izquierdo",
    movements: [],
    times: [],
  },
  joonggun: {
    name: "Joong-Gun",
    gup: "Gup 4",
    video: "",
    description:
      "Se opuso a la fusión de Corea-Japón. Los 32 movimientos representan la edad a la que murió.",
    belt: "Azul",
    diagram: "Doble T",
    qtyMovements: 32,
    junbi: "Moa Junbi Sogi B",
    start: "Pie izquierdo",
    finish: "Pie izquierdo",
    movements: [],
    times: [],
  },
  toigye: {
    name: "Toi-Gye",
    gup: "Gup 3",
    video: "",
    description:
      "Seudónimo de Yi Hang, una autoridad del neo confucionismo. Los 37 movimientos representan la latitud donde nació. El diagrama representa al maestro.",
    belt: "Azul punta Roja",
    diagram: "Cruz Escolástica",
    qtyMovements: 37,
    junbi: "Moa Junbi Sogi B",
    start: "Pie izquierdo",
    finish: "Pie derecho",
    movements: [],
    times: [],
  },
  hwarang: {
    name: "Hwa-Rang",
    gup: "Gup 2",
    video: "",
    description:
      "Grupo de jóvenes guerreros creados durante la dinastía silla hace más de 1350 años, al comienzo del siglo VII. Los 29 movimientos hacen referencia a la división 29 de infantería, donde el Taekwondo alcanzó su madurez.",
    belt: "Rojo",
    diagram: "Doble T",
    qtyMovements: 29,
    junbi: "Moa Junbi Sogi C",
    start: "Pie izquierdo",
    finish: "Pie derecho",
    movements: [],
    times: [],
  },
  choongmoo: {
    name: "Choong-Moo",
    gup: "Gup 1",
    video: "",
    description:
      "Seudónimo del almirante Yi son-sin de la dinastía Yi. Se le atribuye haber inventado la primera nave de combate blindada en 1592, la que sería precursora del submarino. El tul finaliza con un ataque con la mano izquierda para simbolizar tu tremenda muerte, por la que no tuvo tiempo de demostrar su lealtad al rey.",
    belt: "Rojo punta Negra",
    diagram: "Doble T",
    qtyMovements: 30,
    junbi: "Narani Junbi Sogi",
    start: "Pie izquierdo",
    finish: "Pie izquierdo",
    movements: [],
    times: [],
  },
  kwangae: {
    name: "Kwang-Gae",
    dan: "I Dan",
    video: "yjX_nw31m-4",
    description:
      "Kwang-Gae-Toh-Wang que fue el 19 rey de la Dinastía Koguryo que reconquistó todos los territorios perdidos incluyendo la mayor parte de Manchuria. El diagrama representa la expansión y recuperación del territorio perdido. Los 39 movimientos se refiere a su reinado de 39 años.",
    belt: "Negro I DAN",
    diagram: "",
    qtyMovements: 39,
    junbi: "Narani so Hanulson",
    start: "Pie izquierdo",
    finish: "Pie izquierdo",
    movements: [
      "Levar el pie izquierdo hacia el derecho formando una posicion preparatoria de pies juntos B (Moa sogi B) a D",
      "Moviendo las manos en un movimiento circular",
      "Desplazar el pie izquierdo a D formando una posicion para caminar, realizando un golpe en forma de gancho con el puño derecho (Realiarlo lentamente)",
      "Desplazar el pie derecho a D formando una posicion para caminar, realizando un golpe en forma de gancho con el puño izquierdo (Realizarlo lentamente)",
      "(Movimiento de traslado de 2 pasos) Desplazar el pie izquierdo a la parte delantera lateral del pie derecho, luego traslada el pue derecho a D formando una posicion para caminar realizando un bloqueo de agarre descendente con la palma derecha",
      "Desplazar el pie derecho a C (En un deslizamiento hacia atras) para formar una posicion en 'L' (Mirando a D) Realizando un bloqueo bajo con canto de mano",
      "(Movimiento de traslado de 2 pasos) Desplazar  el pie derecho hacia la parte delantera lateral del pie izquierdo, luego desplazar el pie izquierdo a D formando una posicion para caminar realizando un bloqueo alto de agarre decendente con la palma izquierda",
      "Desplazar el pie izquierdo a C (En un deslizamiento hacia atras) para formar una posicion en 'L' (Mirando a D) Realizando un  bloqueo bajo con canto de mano",
      "Desplazar el pie izquierdo a D formando una posicion en L corta realizando un bloqueo alto con canto de mano izquierda",
      "Desplazar el pie derecho a D formando una posicion en 'L' corta realizando un bloqueo alto con canto de mano derecha",
      "Desplazar el pie izquierdo hacia la parte delantera lateral del pie derecho, girar sobre el pie izquierdo (NO se mueve, solo gira) en sentido de las agujas del reloj (Por delante)  formando una posicion para caminar, realizando un bloqueo ascendente (A altura media) con la palma derecha (Realizarlo lentamente)",
      "Desplazar el pie derecho a C formando una posicion para caminar, realizando un bloqueo ascendente con palma izquierda (Realizarlo lentamente)",
      "Dezplazar el pie izquierdo para formar una posicion de pies juntos, realizar un movimiento circular para llegar a un bloqueo bajo con canto de mano derecha (Mano derecha paralela al cuerpo y la izquierda perpendicular a esta)",
      "Con el pie izquierdo dar una patada de presion (Altura de la rodilla) a E (manteniendo la posicion de las manos del movimiento 12)",
      "Con el pie izquierdo dar una patada lateral a altura media a E (manteniendo la posicion de las manos)",
      "Bajar el pie izquierdo a E formando una posicion 'L', dar un golpe alto con canto de mano derecha. el puño izquierdo se dirige al hombro derecho",
      "Con el puño izquierdo dar un golpe descendente a E formando una posicion de pies juntos mirando a C",
      "Con el pie derecho dar una patada de presion a F (Manteniendo la posicion de las manos del movimiento 16)",
      "Con el pie derecho dar una patada lateral a altura media a F (Manteniendo la posicion de las manos del movimiento 16)",
      "Bajar el pie derecho a F formando una posicion 'L' dando un golpe alto con canto de mano izquierda, el puño derecho se dirige al hombro izquierdo",
      "Con el puño derecho dar un golpe descendente a F formando una posicion de pies juntos mirando a C",
      "Dezplazar el pie izquierdo a C formando una posicion para caminar baja, realizando un bloqueo por presion con la palma derecha (Noollo Makgi)(Se realiza lentamente)",
      "Desplazar el pie derecho a C formando una posicion para caminar baja realizando un bloqueo por precion con palma izquierda (se realiza lentamente)",
      "Dezplazar el pie derecho a D formando una posicion de jinete (Mirando a F) Dando un golpe later alto a D con el reverso del puño derecho",
      "Con un doble antebrazo interno derecho realizar un bloquieo medio a D cambiando a una posicion para caminar moviendo la pierna derecha(con pierna derecha adelante)",
      "Con el antebrazo izquierdo realizar un bloqueo lateral bajo hacia D manteniendo la posicion para caminar (Movimiento 24)",
      "Con la punta de los dedos de la mano derecha realizar un golpe alto a D formando una posicion para caminar baja, deslizando el pie derecho",
      "Dezplazar el pie izquierdo sobre la linea B-C para formar una posicion de jinete mirando a F, dando un golpe lateral alto a C con el reverso del puño izquierdo",
      "Con un doble antebrazo interno izquierdo realizar un bloqueo medio a C cambiando a una posicion para caminar apoyandose sobre el pie izquierdo",
      "Con el antebrazo derecho realizar un bloqueo lateral bajo a C deslizandose levemente a D, manteniendo la pisicion para caminar (Movimiento 28)",
      "Con la punta de los dedos de la mano izquierda realizar un golpe alto a C formando una posicion para caminar baja deslizando el pie izquierdo",
      "Con un pisoton mover el pie derecho a C formando una posicion para caminar, dando un golpe alto con ambos puños verticales",
      "Con un pisoton mover el pie izquierdo a A formando una posicion para caminar dando un golpe bajo en forma de gancho con ambos puños",
      "Con el pie derecho dar una patada frontal media a A manteniendo las manos como el movimiento anterior",
      "Bajar el pie derecho hacia el izquierdo, desplazar el pie izquierdo a A formando una posicion en 'L' mirando a B realizando un bloquueo medio con canto de mano derecha",
      "Desplazar el pie izquierdo a B formando una posicion para caminar dando un golpe de puño alto izquierdo a B",
      "Con un pisoton desplazar el pie derecho a B formando una posicion para caminar dando un golpe bajo en forma de gancho cn ambos puños",
      "Con el pie izquierdo dar una patada frontal media a B, manteniendo las manos como en el movimiento anterior",
      "Bajar el pie izquierdo hacia el derecho, dezplazar el pie derecho a B para formar una posicion en 'L' mirando a  A realizando un bloqueo medio con canto de mano izquierda",
      "Dezplazar el pie derecho a A formando una posicion para caminar dando un golpe de puño alto derecho a A",
      "Llevar el pie izquierdo a la posicion preparatoria",
    ],
    times: [
      "0m04.619s",
      "0m08.115s",
      "0m11.776s",
      "0m13.749s",
      "0m15.383s",
      "0m17.211s",
      "0m18.863s",
      "0m20.419s",
      "0m22.334s",
      "0m25.402s",
      "0m11.776s",
      "0m13.749s",
      "0m15.383s",
      "0m17.211s",
      "0m18.863s",
      "0m20.419s",
      "0m22.334s",
      "0m25.402s",
      "0m28.848s",
      "0m30.515s",
      "0m31.068s",
      "0m31.922s",
      "0m33.427s",
      "0m34.593s",
      "0m35.595s",
      "0m36.649s",
      "0m38.105s",
      "0m39.297s",
      "0m42.391s",
      "0m45.824s",
      "0m47.585s",
      "0m48.834s",
      "0m49.806s",
      "0m53.221s",
      "0m55.071s",
      "0m56.507s",
      "0m57.243s",
      "1m0.902s",
      "1m02.543s",
      "1m04.013s",
      "1m05.047s",
      "1m06.861s",
      "1m08.511s",
      "1m10.145s",
      "1m10.987s",
      "1m12.921s",
      "1m14.423",
      "1m18.719",
    ],
  },
  poeum: {
    name: "Po-Eum",
    dan: "I Dan",
    video: "",
    description:
      "Es el pseudónimo de un súbdito leal, Chong Mong-Chu (1400 D.C) que fue un famoso poeta que decía 'Yo no serviría a un segundo amo aunque fuera crucificado 100 veces' es conocido por todo coreano. Fue pionero en el campo de la física. El diagrama representa su lealtad inequívoca al rey y al país, hacia el fin de la Dinastía Koryo.",
    belt: "Negro I DAN",
    diagram: "Línea recta (horizontal)",
    qtyMovements: 36,
    junbi: "Narani so Hanulson",
    start: "Pie izquierdo",
    finish: "Pie izquierdo",
    movements: [],
    times: [],
  },
  gebaek: {
    name: "Ge-Baek",
    dan: "I Dan",
    video: "",
    description:
      "Recibe el nombre de Ge-Baek gran general de la dinastía Baek Je. El diagrama representa su severa y estricta disciplina militar.",
    belt: "Negro I DAN",
    diagram: "Línea recta (vertical)",
    qtyMovements: 44,
    junbi: "Narani Junbi Sogi",
    start: "Pie derecho",
    finish: "Pie derecho",
    movements: [],
    times: [],
  },
  euiam: {
    name: "Eui-Am",
    dan: "II Dan",
    video: "",
    description:
      "Es el pseudónimo de SibByong Hi, líder del movimiento de independencia de Corea (10 de Marzo de 1919). Los 45 movimientos se relacionan con su edad cuando cambió el nombre de Dong Hak( Cultura Oriental) por el de ChondoKyo (Religión de los Caminos del Cielo) en 1905. El diagrama representa su indomable espíritu dedicado a la prosperidad de su nación.",
    belt: "Negro II DAN",
    diagram: "Línea recta (vertical)",
    qtyMovements: 45,
    junbi: "Narani Junbi Sogi D",
    start: "Pie derecho",
    finish: "Pie derecho",
    movements: [],
    times: [],
  },
  choongjang: {
    name: "Choong-Jang",
    dan: "II Dan",
    video: "",
    description:
      "Es el pseudónimo dado al General Kim DukRyang que vivió durante la Dinastía Yi en el siglo XV. Este modelo termina con un ataque de mano izquierda que simboliza la tragedia de su muerte en prisión a los 27 años, antes de lograr su plena madurez.",
    belt: "Negro II DAN",
    diagram: "",
    qtyMovements: 52,
    junbi: "Narani Junbi Sogi D",
    start: "Pie derecho",
    finish: "Pie izquierdo",
    movements: [],
    times: [],
  },
  juche: {
    name: "Juche",
    dan: "II Dan",
    video: "",
    description:
      "Es una idea filosófica que el hombre es el amo de todo y decide todo. Es decir que el hombre es el amo del mundo y de su propio destino. Esta idea se dice fue sacada en la montaña de Baekdu que simboliza el espíritu de la gente coreana. El modelo representa la montaña de Baekdu.",
    belt: "Negro II DAN",
    diagram: "",
    qtyMovements: 45,
    junbi: "",
    start: "Pie izquierdo",
    finish: "Pie derecho",
    movements: [],
    times: [],
  },
  choiyong: {
    name: "Choi-yong",
    dan: "III Dan",
    video: "",
    description:
      "El nombre proviene del General Choi Yong comandante en Jefe de las Fuerzas Armadas durante el Siglo XIV en la Dinastía Koryo,muy respetado por su lealtad, patriotismo y humildad. Fue ejecutado por sus comandantes subordinados encabezados por el General YiSungGae que después se convirtió en el primer rey de la Dinastía Yi",
    belt: "Negro III DAN",
    diagram: "Cruz",
    qtyMovements: 46,
    junbi: "Narani Junbi Sogi C",
    start: "Pie izquierdo",
    finish: "Pie derecho",
    movements: [],
    times: [],
  },
  samil: {
    name: "Sam-Il",
    dan: "III Dan",
    video: "",
    description:
      "Denota la fecha histórica del movimiento de independencia de Corea que comenzó el 1o de Marzo de 1919.Posee 33 movimientos y representa a los 33 patriotas que planearon el movimiento.",
    belt: "Negro III DAN",
    diagram: "Cruz",
    qtyMovements: 33,
    junbi: "Narani Junbi Sogi C",
    start: "Pie izquierdo",
    finish: "Pie derecho",
    movements: [],
    times: [],
  },
  yoosin: {
    name: "Yoo-Sin",
    dan: "III Dan",
    video: "",
    description:
      "Designado así por el General Kim Yoo Sin Comandante general durante la Dinastía Silla, que unió los 3 reinos separados de Corea.",
    belt: "Negro III DAN",
    diagram: "",
    qtyMovements: 68,
    junbi: "Moosa Junbi Sogi",
    start: "Pie izquierdo",
    finish: "Pie derecho",
    movements: [],
    times: [],
  },
  yongae: {
    name: "Yon-Gae",
    dan: "IV Dan",
    video: "",
    description:
      "Proviene del nombre del famoso general de la dinastía de Koguryo Yon Gae Somoon. Los 49 movimientos se refieren a los dos últimas cifras del año 649 cuando obligó a la dnastía Tang a abandonar Corea, destruyendo casi a 300.000 de sus tropas en Ansi Sung.",
    belt: "Negro IV DAN",
    diagram: "Cruz",
    qtyMovements: 49,
    junbi: "Moosa Junbi Sogi",
    start: "Pie derecho",
    finish: "Pie derecho",
    movements: [],
    times: [],
  },
  ulji: {
    name: "Ul-Ji",
    dan: "IV Dan",
    video: "",
    description:
      "Proviene del nombre del general Ul-Ji Moon Dok, que defensió Corea con valentía contra la invasión de Tang y su ejército de casi un millón de soldados dirigidos por Yang Je en el año 612 A.C. Ul Ji utilizando técnicas de disuación y guerrilla pudo diezmar un alto porcentajo de la fuerza. En diagrama evoca su nombre. Los 42 movimientos representan la edad del autor cuando creó este tul.",
    belt: "Negro IV DAN",
    diagram: "",
    qtyMovements: 42,
    junbi: "",
    start: "Pie izquierdo",
    finish: "Pie izquierdo",
    movements: [],
    times: [],
  },
  moonmoo: {
    name: "Moon-Moo",
    dan: "IV Dan",
    video: "",
    description:
      "Hace honor al 30 rey de la dinastía Silla. Su cuerpo fue enterrado cerca de Dae Wang Am (roca del gran rey). Según su voluntad pusieron su cuerpo en el mar 'donde mi alma defenderá para siempre mi país contra los japoneses'. Se dice que Sok Gul Am (cueva) fue construido para guardar su tumba. El Sok Gul Am es un buen ejemplo de la cultura de la dinastía Silla. Los 61 movimientos simbolizan las dos últimos cifras del año 661, cuando Moon-Moo subió al trono.",
    belt: "Negro IV DAN",
    diagram: "Cruz",
    qtyMovements: 61,
    junbi: "Narani Junbi Sogi",
    start: "Pie izquierdo",
    finish: "Pie derecho",
    movements: [],
    times: [],
  },
  sosan: {
    name: "So-San",
    dan: "V Dan",
    video: "",
    description:
      "Es el seudónimo del célebre monje Choi Hyongh Ung (1520-1604) durante la dinastía Lee. Los 72 movimientos se refieren a su edad cuando organizó un cuerpo de monjes soldados con la ayuda de su alumno Sa Myung Dang. Esos monjes soldados ayudaron a expulsar los piratas japoneses que controlaban la mayor parte de la península en 1592.",
    belt: "Negro V DAN",
    diagram: "Cruz",
    qtyMovements: 72,
    junbi: "Narani Junbi Sogi A",
    start: "Pie derecho",
    finish: "Pie derecho",
    movements: [],
    times: [],
  },
  sejong: {
    name: "Se-Jong",
    dan: "V Dan",
    video: "",
    description:
      "Proviene del nombre del más grande de los reyes coreanos, Se-Jong, quien inventó el alfabeto coreano en 1443, y quien era, también, un metereólogo famoso. El diagrama significa 'rey', mientras que los 24 movimientos se refieren a las 24 letras del alfabeto coreano.",
    belt: "Negro V DAN",
    diagram: "",
    qtyMovements: 24,
    junbi: "Moa Junbi Sogi B",
    start: "Pie izquierdo",
    finish: "Pie izquierdo",
    movements: [],
    times: [],
  },
  tongil: {
    name: "Tong-Il",
    dan: "VI Dan",
    video: "",
    description:
      "Denota la resolución de reunificar Corea, dividida desde 1945. El diagrama simboliza la homogeneidad de raza.",
    belt: "Negro V DAN",
    diagram: "",
    qtyMovements: 56,
    junbi: "Moa Junbi Sogi C",
    start: "Pie derecho",
    finish: "Pie derecho",
    movements: [],
    times: [],
  },
};

let player;
/** Tul cuyo video y tiempos usan los movimientos (ej. "chonji") */
let activeTulKey = null;

/** Convierte formato YouTube (#t=0m01s) a segundos para la API */
function youtubeTimeToSeconds(t) {
  const m = String(t).match(/^(\d+)m(\d+)s?$/);
  if (!m) return 0;
  return parseInt(m[1], 10) * 60 + parseInt(m[2], 10);
}

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "315",
    width: "560",
    videoId: tules.chonji.video,
    events: {
      onReady: function () {
        activeTulKey = "chonji";
        renderMovements("chonji");
      },
    },
  });
}

/**
 * Carga el video del tul y actualiza la lista de movimientos.
 * @param {string} key - clave en `tules` (ej. "chonji")
 */
function selectTul(key) {
  const tul = tules[key];
  if (!tul || !player || typeof player.loadVideoById !== "function") return;
  activeTulKey = key;
  player.loadVideoById({
    videoId: tul.video,
    startSeconds: 0,
  });
  renderMovements(key);
  document.getElementById("tul-name").textContent = tul.name;
  document.getElementById("tul-description").textContent = tul.description;
  document.getElementById("tul-belt").textContent = tul.belt;
  document.getElementById("tul-diagram").textContent = tul.diagram;
  document.getElementById("tul-qty-movements").textContent = tul.qtyMovements;
  document.getElementById("tul-junbi").textContent = tul.junbi;
  document.getElementById("tul-start").textContent = tul.start;
  document.getElementById("tul-finish").textContent = tul.finish;
}

/** Pinta los pasos del tul y enlaza cada uno al tiempo del video */
function renderMovements(key) {
  const tul = tules[key];
  const container = document.getElementById("tul-movements");
  if (!container || !tul || !tul.movements) return;
  container.innerHTML = "";
  tul.movements.forEach(function (text, i) {
    const row = document.createElement("div");
    row.className = "tul-movement-row";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "tul-movement-btn";
    btn.textContent = i + 1 + ". " + text;
    btn.addEventListener("click", function () {
      goToMovement(i);
    });
    row.appendChild(btn);
    container.appendChild(row);
  });
}

/** Desplaza la vista hasta el reproductor de YouTube */
function scrollToVideo() {
  const el = document.getElementById("player");
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Salta al instante del movimiento `index` del tul activo */
function goToMovement(index) {
  if (!player || !activeTulKey) return;
  const tul = tules[activeTulKey];
  if (!tul.times || index < 0 || index >= tul.times.length) return;
  goTo(tul.times[index]);
  scrollToVideo();
}

/** Acepta segundos (número) o cadena tipo "0m01s" */
function goTo(time) {
  if (!player) return;
  const seconds = typeof time === "string" ? youtubeTimeToSeconds(time) : time;
  player.seekTo(seconds, true);
  player.pauseVideo();
}
