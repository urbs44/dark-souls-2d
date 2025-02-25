// pages/index.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import DarkSouls2D from '../components/DarkSouls2D';

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Head>
        <title>Dark Souls 2D</title>
        <meta name="description" content="A 2D Dark Souls-inspired browser game" />
      </Head>

      <main className="h-full w-full">
        <DarkSouls2D />
      </main>
    </div>
  );
}