"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from './components/header';
import styles from '../styles/globals.scss';

export default function Home() {
  return (
    <>
      <div>
        <Header />
      </div>
    </>
  );
}
