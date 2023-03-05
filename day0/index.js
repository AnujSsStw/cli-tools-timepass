#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

const sleep = (ms = 2000) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, ms)
  );

let pp;

const main = async () => {
  const ara = chalkAnimation.karaoke(`sheeeeeeeeeeeeeeeeeeeeeeeeees \n`);
  await sleep();

  ara.stop();

  console.log(`
  ${chalk.bgCyan("my mm")}
  yo gir`);
};

async function handleAns(ans) {
  const spinnee = createSpinner("checking if you are a perv..").start({
    color: "green",
  });
  await sleep();

  if (ans) {
    spinnee.success({
      text: `you luck prevv ${pp}`,
      mark: "->",
    });
  } else {
    spinnee.error({
      text: `you normi ${pp}`,
    });
    process.exit(1);
  }
}

const askYOUcreppylittlesecret = async () => {
  const prompt = await inquirer.prompt({
    type: "input",
    name: "YOUcreppylittlesecret",
    message: "tell me YOUcreppylittlesecret",
    default() {
      return "prevvv";
    },
  });

  pp = prompt.YOUcreppylittlesecret;

  const answers = await inquirer.prompt({
    name: "Q1",
    type: "list",
    message: "JavaScript was created in 10 days then released on\n",
    choices: [
      "May 23rd, 1995",
      "Nov 24th, 1995",
      "Dec 4th, 1995",
      "Dec 17, 1996",
    ],
  });

  await handleAns(answers.Q1 === "May 23rd, 1995");
};

const end = async () => {
  console.clear();
  const msg = `you did ${pp}`;

  figlet(msg, (err, res) => {
    console.log(gradient.retro.multiline(res));
  });
};

await main();
await askYOUcreppylittlesecret();
await end();
