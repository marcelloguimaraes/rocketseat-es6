import axios from 'axios';

class ApiGitHub {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);            
            console.log(response);
        } catch (error) {
            if(error.response.status === 404) console.error('Usuário não encontrado');
        }
    }
}

ApiGitHub.getUserInfo('marcelloguimaraesssssssssssss');

// import { soma } from './funcoes';
// console.log(soma(1, 2))

//ASYNC AWAIT
// const retornaPromise = (number) => {
//     return new Promise((resolve, reject) => {
//         if(number % 2 == 0)
//             setTimeout(() => resolve('Par'), 2000);
//         else
//             setTimeout(() => reject('Ímpar'), 2000);
//     })
// };

// const executaPromise = async () => {
//     try {
//         const response = await retornaPromise(5);
//         console.log(response);
        
//     } catch (error) {
//         console.log('Erro: ' + error);
//     }
// }

// executaPromise();