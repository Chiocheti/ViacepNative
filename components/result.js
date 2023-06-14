import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Result({ address }) {
    return (
        <View style={styles.result}>

            <Text>
                Rua: {address?.logradouro}
            </Text>
            <Text>
                Bairro: {address?.bairro}
            </Text>
            <Text>
                Cidade: {address?.localidade}
            </Text>
            <Text>
                Estado: {address?.uf}
            </Text>

        </View>
    );
};

const styles = StyleSheet.create({
    result: {
        display: "flex",
        flexDirection: "column",
    },
});