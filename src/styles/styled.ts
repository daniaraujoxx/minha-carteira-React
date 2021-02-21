import 'styled-components';

/* 
estou criando uma tipagem, uma interface para conseguir consultar as cores em qualquer lugar, definindo 
como um objeto deve ser. o defaultTheme é padrão e fazendo isso estamos sobrescrevendo o que já existe
*/


declare module 'styled-components' {
    export interface DefaultTheme {
            title: string,
        
            color: {
                primary: string,
                secondary: string,
                tertiary: string,
        
                white: string,
                black: string,
                gray: string,
        
                sucess: string,
                info: string,
                warning: string,
            
            },
        
        }
    }
