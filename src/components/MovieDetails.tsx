import React from 'react'
import { Text, View } from 'react-native'
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import { CastItem } from './CastItem';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {

    const voteAverage = parseFloat(movieFull.vote_average).toFixed(2);

    return (
        <>
            {/*Detalles*/}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name='star-outline' color='grey' size={16} />
                    <Text> {voteAverage}</Text>

                    <Text style={{ marginLeft: 5 }}>- {movieFull.genres.map(g => g.name).join(', ')} </Text>
                </View>

                {/*Historia*/}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>Historia</Text>
                <Text style={{ fontSize: 16 }}>{movieFull.overview}</Text>

                {/*Presupuesto*/}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>Presupuesto</Text>
                <Text style={{fontSize: 18}}>{currencyFormatter.format(movieFull.budget,{code: 'USD'})}</Text>

                {/*Casting*/}
                <View style={{marginTop: 10,  marginBottom: 100 }}>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>Actores</Text>
                <FlatList style={{marginTop: 10, height: 70}} showsHorizontalScrollIndicator={false} horizontal={true} data={cast} keyExtractor={(item) => item.id.toString()} renderItem={({item}) => <CastItem actor={item} />}/>

                </View>

            </View>
        </>
    )
}
