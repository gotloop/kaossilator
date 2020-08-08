import React from 'react';
import Kaossillator from './app/components/Kaossillator';

if (typeof AudioContext === "undefined")
  alert('audio api not supported');

export default function App()
{
    return (<Kaossillator></Kaossillator>)
}