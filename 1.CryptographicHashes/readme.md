Blockchain and Crypto
Welcome to the Alchemy University's Ethereum Developer Bootcamp! In this course we will take you through everything you need to know to build, deploy, test and interact with programs on the Ethereum blockchain. For the rest of this course we'll refer to these programs as smart contracts and you'll soon see why this term is used. First things first, let's dive into what purpose blockchains serve and discuss our first core cryptographic primitive: the cryptographic hash function 


Access the slides here.

Blockchains
To understand how blockchains work, let’s start off with some high level questions.

What is the purpose of blockchain? 
The purpose of a blockchain is to have a network of computers agree upon a common state of data. Plain and simple. Any person or organization should be able to participate in this process. No person or organization should be able to control this process.

 Generally the term consensus is used to describe a network coming to an agreement on the state of the data. You'll hear this word quite often in regards to blockchain!

 So there you have it! The high-level goals of blockchain. Not so bad, huh?

Let's explore this further with the most common use-case for blockchains: cryptocurrency - an on and off hot topic in today's modern age!

Why is blockchain needed for cryptocurrency?
To understand why blockchain is needed for digital currencies let's imagine a naive digital currency without blockchain. 

Let's take a spreadsheet and give all our friends some money:

NAME	BALANCE
Alice	10
Bob	10
Charlie	10
Sweet! Everyone starts with 10 money.

Now Alice wants to buy something from Bob, so she pays him 5 money. She tells you (the bookkeeper) to transfer 5 monies over to Bob.

Sure thing, you say:

NAME	BALANCE
Alice	5
Bob	15
Charlie	10
 Excellent! Everyone's balances are updated.

At this point you might be thinking "There really isn't much to this whole digital currency thing!". Or, more likely, you're considering all the problems with this scenario:

Alice, Bob, and Charlie need to trust that you won't cheat them. As the bookkeeper you need to be resistant to bribes!
Alice, Bob, and Charlie need a way to easily view their balance that is widely available and up-to-date.
Alice, Bob, and Charlie invite more friends into your currency circle and quickly the bookkeeping becomes too much for you to handle. 
We know how to solve problems #2 and #3 with our programming skills! We can build a website with an awesome UI and an API for making transactions! 

But what about problem #1? How do we solve for trust? 

 This was a problem that ate at Cryptography Enthusiasts for years. Deep down, many self-proclaimed Cypherpunks felt as though the solution was somewhere in the land of cryptographic technology, yet nobody was able to create a foolproof system.

In, 2008, such a system was imagined. A person or persons, under the pseudonym Satoshi Nakamoto released a whitepaper for Bitcoin. In this paper they described a system that would create a peer-to-peer network for exchanging value. This system would combine years of cryptographic research and game theoretical financial incentives to create a secure, scalable network. The paper describes a chain of blocks tied together cryptographically. This would later be coined the blockchain.

To tie it altogether, blockchain was invented to solve for trust. To create a system that is completely neutral and resistant to any censorship or bribe.

Smart Contract Blockchains
Smart Contract blockchains provide developers with a way to decentralize where the code runs. In this way, code can truly become a public resource. This means code can run without any direct ownership, making it censorship resistant and transparently verifiable.

One important point to drill home is that the decentralization isn't about the code itself, but how the code is executed. For example, let's take a quick glance at some Solidity smart contract code:

// this data structure will keep track of which address has a balance
mapping(address => uint) balances;

function transfer(address to, uint amount) external {
  // subtract the amount from the sender's balance
  balances[msg.sender] -= amount;

  // add the amount to the recipient's balance
  balances[to] += amount;
}
 This function is the bread and butter of ERC20 tokens, which we'll talk about later in the course. You'll see there's nothing special about the transfer function here from a programming standpoint. Coming from other languages this code may look quite familiar.

The key difference which makes this code a smart contract is when you take this code, compile it and deploy it to a decentralized blockchain. When you do that, the code becomes publicly available on the blockchain and the nodes in the network will enforce the logic of the code through the financial incentives of the blockchain protocol.

Don't worry if that sounds a bit complicated at the moment!  A key takeaway here is that a smart contract is code that will always run the way it is programmed. We'll take this one step at a time and you'll soon see how blockchains enforce those rules.

Cryptographic Hash Functions
Before diving any further we must understand the cryptographic hash function. Let's break this term down a bit. A hash function is a function which takes an input of any size and turns it into a fixed size output. Let's imagine a hash function that takes an input of any size and returns a fixed 32 byte output:

INPUT	INPUT SIZE	OUTPUT	OUTPUT SIZE
52	8 bytes	0x41cf...	32 bytes
"happy times"	22 bytes	0xd6bf...	32 bytes
monalisa.jpg	875000 bytes	0x7cde...	32 bytes
worldseries.mp4	1.6e+10 bytes	0x9c0e...	32 bytes
 These inputs get larger from top to bottom but they always map to an output of 32 bytes. There are many different algorithms for hash functions which could take these inputs and create outputs of fixed sizes.

The specific types of hash functions we are going to focus on are cryptographic hash functions. These hash functions need five specific properties. They must be:

 Deterministic - One specific input always maps to the same specific output
 Pseudorandom - It is not possible to guess the output based on the output of similar inputs
 One-way - If someone gives you a new output, you could not determine an input without guessing
 Fast to Compute - It must be a quick calculation for a computer
 Collision-resistant - The chance of a collision should be infinitesimally small
Challenge Yourself: Try using this sha256 online tool. Can you prove to yourself each one of these properties?

With a secure cryptographic hash function you can create a unique, fixed-size representation of an input regardless of its size. For blockchains this feature is critically important for saving space. In many cases blockchains and smart contracts will not need to store an input, they can just store the hash output. Cryptographic Hash Functions will also be super important for the first successful blockchain consensus mechanism we'll talk about: proof of work.

Let's try out using a cryptographic hash function in the next exercise!

Complete


Made 9 formatting edits between lines 7 and 15