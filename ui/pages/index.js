import React, { useState, useEffect } from "react";
import Head from "next/head";
import abi from "../config/abi";
import Web3 from "web3";

export default function Home() {
  return (
    <>
      <Head>
        <title>Election Dapp</title>
        <meta name="description" content="Your First Dapp on Shardeum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <br />
        <br />
        <h1>Election Dapp</h1>
        <br />
        <br />
      </div>
    </>
  );
}
