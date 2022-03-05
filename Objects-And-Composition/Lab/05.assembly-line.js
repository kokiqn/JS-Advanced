function createAssemblyLine() {
  function hasClima(obj) {
    obj.temp = 21;
    obj.tempSettings = 21;
    obj.adjustTemp = () => {
      if (obj.temp < obj.tempSettings) obj.temp += 1;
      else obj.temp -= 1;
    }
  }

  function hasAudio(obj) {
    obj.currentTrack = {};
    obj.nowPlaying = () => {
      obj.currentTrack &&
        console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`);
    }
  }

  function hasParktronic(obj) {
    obj.checkDistance = (distance) => {
      let output = (distance < 0.1)
        ? "Beep! Beep! Beep!"
        : (distance < 0.25)
          ? "Beep! Beep!"
          : (distance < 0.5)
            ? "Beep!"
            : "";
      console.log(output);
    }
  }

  return {
    hasAudio,
    hasClima,
    hasParktronic
  }
}

const assemblyLine = createAssemblyLine();

const myCar = {
  make: 'Toyota',
  model: 'Avensis'
};

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

