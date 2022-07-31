
import { render, screen, fireEvent } from "@testing-library/react"
import PokedexSelector from "./PokedexSelector";
import { Pokedex } from 'pokeapi-js-wrapper';
import React, { useState } from 'react'
import App from "./App";
describe('PokedexSelector', function () {
    afterEach(function () {
        jest.resetAllMocks();
    });
    test('WHEN new user THEN render PokedexSelector', function () {
        //Arrange
        //Act
        render(<App />);
        const newButton = screen.findByText('national');
        //Assert
        expect(newButton).toBeInTheDocument();
    });
})