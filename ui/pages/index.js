import React, { useState, useEffect } from "react";
import Head from "next/head";
import abi from "../config/abi";
import Web3 from "web3";

export default function Home() {
  const [candidates, setCandidates] = useState([]);
  const [contract, setContract] = useState();
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState(false);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        setLoading(true);
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setAddress(accounts[0]);
        const contract = new web3.eth.Contract(
          abi,
          process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
        );
        setContract(contract);
        const total = await contract.methods.candidatesCount().call();
        let candidates = [];
        for (let i = 1; i <= total; i++) {
          const candidate = await contract.methods.candidates(i).call();
          candidates.push(candidate);
        }
        setCandidates(candidates);

        setLoading(false);
      } catch (error) {
        alert(error.message);
        setLoading(false);
      }
    } else {
      alert("Pls install metamask to connect!");
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

  const vote = async (id) => {
    try {
      setLoading(true);
      await contract?.methods?.casteVote(parseInt(id)).send({ from: address });
      setLoading(false);
    } catch (error) {
      alert(error.message);
      setLoading(false);
    }
  };

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
        <h3>List of Candidates</h3>
        <br />
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          <ul>
            {candidates?.map((candidate) => (
              <li key={candidate.id}>
                {candidate.name} votes: {candidate.voteCount}
                <button onClick={() => vote(candidate.id)}>Vote</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
