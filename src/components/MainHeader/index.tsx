import React, {useMemo} from 'react';
import Toggle from '../Toogle';
import emojis from '../../utils/emojis'
import { Container, Profile, Welcome, UserName } from './styles';

const MainHeader: React.FC = () => {

    const emoji = useMemo (() => {
    const indice = Math.floor(Math.random() * emojis.length); //vai gerar numero aléatorios até o numero 10
        return emojis[indice];
    }, []);
    return (
        <Container>
            <Toggle />

            <Profile>
            <Welcome>Olá, {emoji}</Welcome>
            <UserName>Daniela Araujo</UserName>

            </Profile>
        </Container>
    );
}

export default MainHeader;