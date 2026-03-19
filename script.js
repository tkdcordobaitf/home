const tules = {
  chonji: {
    video: "4vAdfbs0Rlo",
    description: "Cielo y tierra. Creación del mundo.",
    belt: "Blanco punta Amarilla",
    diagram: "Cruz",
    qtyMovements: 19,
    movements: [
      "Desplazar el pie izquierdo hacia B formando una posición para caminar con un bloqueo bajo con antebrazo izquierdo",
      "Desplazar el pie derecho a B realizando un golpe de puño con la derecha al pecho",
      "Desplazar el pie derecho a A girando en sentido de las agujas del reloj (por el lado del puño o espalda) llegando a una posicion para caminar con una defensa baja con antabrazo derecho",
      "Desplazar el pie izquierdo a A logrando una posicion para caminar con un golpe de puño izquierdo al pecho",
      "Desplazar el pie izquierdo a D realizando una defensa baja con canto de mano izquierdo",
      "Desplazar el pie derecho a D formando una posicion para caminar con un puño al pecho con la derecha",
      "Desplazar el pie derecho a C girando en sentido delas agujas del reloj (por el lado del puño o espalda) para formar una posicion para caminar con un bloqueo bajo con antebrezo derecho",
      "Desplazar el pie izquierdo a C formando una posicion para caminar con un puño al pecho con la izquierda",
      'Desplazar el pie izquierdo a A formando una posicion "L" haciendo una defenza con canto de mano a zona media con el antebrazo izquierdo',
      "Desplazar el pie derechoa a A formando una posicion para caminar con un puño al pecho con la derecha",
      'Desplazar el pie derecho a B girando en sentido de las agujas del reloj (por el lado del puño o espalda) formando una posicion en "L" haciendo un defensa a altura media con atebrazo derecho',
      "Desplazar el pie izquierdo a B formando una posicion para caminar con un puño al pecho con la izquierda",
      'Dezplazar el pie izquierdo a C girando en sentido de las agujas del reloj (por el lado del puño o espalda) formando una posicion en "L" haciendo una defensa a altura media con antebrazo izquierdo',
      "Dezplazar el pie derecho a C formandi una posicion para caminar con un puño al pecho con la derecha",
      'Desplazar el pie derecho a D girando en sentido de las agujas del reloj (por el lado del puño o espalda) formando una posicion en "L" haciendo una defensa a altura media con antebrazo derecho',
      "Desplazar el pie izquierdo a D formando una posicion para caminar con un puño al pecho con la izquierda",
      "Desplazar el pie derecho a D formando una posicion para caminar con un puño al pecho con la derecha",
      "Desplazar el pie derecho a C (dar un paso hacia atras) formando una posicion para caminar con un puño al pecho con la izquierda",
      "Desplazar el pie izquierdo a C (dar un paso hacia atras) formando una posicion para caminar con un golpe de puño al pecho con la derecha",
    ],
    times: [
      "0m01s",
      "0m03s",
      "0m05s",
      "0m06s",
      "0m08s",
      "0m10s",
      "0m11s",
      "0m13s",
      "0m15s",
      "0m16s",
      "0m18s",
      "0m19s",
      "0m21s",
      "0m23s",
      "0m25",
      "0m26s",
      "0m27s",
      "0m29s",
      "0m31s",
    ],
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

/** Salta al instante del movimiento `index` del tul activo */
function goToMovement(index) {
  if (!player || !activeTulKey) return;
  const tul = tules[activeTulKey];
  if (!tul.times || index < 0 || index >= tul.times.length) return;
  goTo(tul.times[index]);
}

/** Acepta segundos (número) o cadena tipo "0m01s" */
function goTo(time) {
  if (!player) return;
  const seconds = typeof time === "string" ? youtubeTimeToSeconds(time) : time;
  player.seekTo(seconds, true);
  player.pauseVideo();
}
