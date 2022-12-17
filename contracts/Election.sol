pragma solidity ^0.8.1;

contract Election {
    // Model a Candidate
    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }

    event VoteCasted(address by, Candidate to);

    // Read/write candidates
    mapping(uint256 => Candidate) public candidates;

    // Maps the votes for every candidate with their ids
    mapping(uint256 => uint256) public votes;

    // Store Candidates Count
    uint256 public candidatesCount;

    constructor() {
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
    }

    function addCandidate(string memory _name) private {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

    function casteVote(uint256 _id) public {
        candidates[_id].voteCount += 1;
        emit VoteCasted(msg.sender, candidates[_id]);
    }

    function getVotes(uint256 _id) public view returns (uint256) {
        return candidates[_id].voteCount;
    }
}
