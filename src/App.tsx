import React from 'react';
import Kaossillator from './app/components/Kaossillator';

if (typeof AudioContext === "undefined")
  console.error('audio api not supported');

export default function App()
{
    return (<div><h1 className="sr-only">Kaossilator</h1><Kaossillator></Kaossillator></div>)
}