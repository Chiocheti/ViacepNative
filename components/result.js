import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Result({ address }) {
    return (
        <View style={styles.result}>
            <Text style={styles.block}>
                CEP: {address?.cep}
            </Text>
            <Text style={styles.block}>
                Rua: {address?.logradouro}
            </Text>
            <Text style={styles.block}>
                Bairro: {address?.bairro}
            </Text>
            <Text style={styles.block}>
                Cidade: {address?.localidade}
            </Text>
            <Text style={styles.block}>
                Estado: {address?.uf}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    result: {
        marginTop: 60,
    },
    block: {
        backgroundColor: '#ffbf75',
        height: 80,
        borderWidth: 1,
        color: '#525558',
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 25
    }
});