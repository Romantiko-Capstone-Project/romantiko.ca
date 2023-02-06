import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ServiceList from './component/ServiceList'
import BarberList from './component/BarberList'

export default function Home() {
  return (
    <>
    <ServiceList />
    <BarberList />
    </>
  );
}
