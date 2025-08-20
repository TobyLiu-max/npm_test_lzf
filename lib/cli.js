#!/usr/bin/env node

// lib/cli.js
console.log('Hello! This is my CLI tool.');

// 你可以解析命令行参数
const args = process.argv.slice(2);

if (args.includes('--help')) {
  console.log('Usage: test_lzf [options]');
  console.log('Options:');
  console.log('  --help     Show help');
  console.log('  --name     Greet someone');
} else if (args.includes('--name')) {
  const nameIndex = args.indexOf('--name') + 1;
  const name = args[nameIndex] || 'World';
  console.log(`Hello, ${name}!`);
} else {
  console.log('Run "test_lzf --help" to see options.');
}