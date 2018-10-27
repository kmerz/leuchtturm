import RNFS from 'react-native-fs';

export default class Persistence {
  static DBFILE = "/leuchtturm.json";
  static read() {
    const path = RNFS.DocumentDirectoryPath + Persistence.DBFILE;
    return RNFS.readFile(path);
  }

  static write(jsonContent) {
    const path = RNFS.DocumentDirectoryPath + Persistence.DBFILE;
    return RNFS.writeFile(path, jsonContent);
  }

  static reset() {
    const path = RNFS.DocumentDirectoryPath + Persistence.DBFILE;
    return RNFS.unlink(path);
  }
}
