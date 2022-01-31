import AsyncStorage from '@react-native-async-storage/async-storage';

class UserAuth {
    SignUpData = async (payload) => { 
        try {
            await AsyncStorage.setItem('auth',JSON.stringify(payload))
            payload.modal(payload.congras)
        }catch (e) {
            console.log('Failed to save the data to the storage')
        }
    }
    LoginData = async (payload)=>{  
        try{  
            await AsyncStorage.getItem('auth')
            .then(req =>JSON.parse(req))
            .then(JSON => payload.email == JSON.email && payload.password == JSON.password
            ? this.TokenSet(payload)
            : payload.modal(payload.error))
        }  
        catch(error){  
            payload.modal("Please First SignUp than Login") 
        } 
    }
    TokenSet = async (payload) =>{  
        const token = JSON.stringify(payload.key)
        try{  
            const key = await AsyncStorage.setItem('token',token)
            payload.nav.replace(payload.scrn)
        }  
        catch(error){  
            console.log("Token Set Error",error)  
        }  
    }
    UpdateUserData = async (payload_Signup,payload_User,mod) => { 
        try {
            await AsyncStorage.setItem(
                'auth',
                JSON.stringify(payload_Signup),
                () => {
                  AsyncStorage.mergeItem(
                    'auth',
                    JSON.stringify(payload_User),
                    () => {
                      AsyncStorage.getItem('auth', (err, result) => {
                          if(mod === 'update'){
                            payload_User.modal(payload_User.congras)
                          }
                        
                      });
                    }
                  );
                }
            );
        }catch (e) {
            console.log('Failed to Update the data to the storage')
        }
    }
    clearStorage = async () => {
        try {
          await AsyncStorage.clear()
          alert('Storage successfully cleared!')
        }catch (e) {
          alert('Failed to clear the async storage.')
        }
    }
}
export const Auth = new UserAuth()