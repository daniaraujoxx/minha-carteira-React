import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';



import { Container } from './styles';

const Dashboard: React.FC = () => {

    const options = [
        {value: 'Daniela', label: 'Daniela'},
        {value: 'João', label: 'João'},
        {value: 'Rithy', label: 'Rithy'}

    ]



    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#fff">
                <SelectInput options={options} onChange={() => {}}/>
            </ContentHeader>

        </Container>
    );
}

export default Dashboard;