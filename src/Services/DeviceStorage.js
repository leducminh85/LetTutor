const deviceStorage = {
  
    async saveItem(key, value) {
      try {
        await AsyncStorage.setItem(key, value);
      } catch (error) {
        console.log('AsyncStorage Error: ' + error.message);
      }
    },

    async getItem(key) {
        try {
          return await AsyncStorage.get(key);
        } catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
      }
    
  };