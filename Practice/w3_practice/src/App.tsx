import React, { ReactNode } from 'react';


import './App.css';

// type exploration

function addNames(): string[]{
  
  const names: string[] = ["jane","john","josh"];
  return names;
}

function addNumbers(): number[]{
  
  const numbers: number[] = [3,6,9];

  numbers.push(4);
  let head: number = numbers[1];
  var pop: any = numbers.pop();

  let add: number = pop + head;

  numbers.push(add);
  return numbers;

}

function addTuples(): any[]{
  
  let typeTuple: [number, boolean, string];

  typeTuple = [66,false,"hello"];

  return typeTuple;
}

function namedTuples(): number[]{

  const namedTuple: [x: number, y: number] = [77.2,88.9];

  return namedTuple;

}

function readOnly(): readonly string[]{

  const readOnlyNamed: readonly [cow: string, dog: string]  = ["moo","woof"];

  return readOnlyNamed;
}

// Typed Objects ///

// creating an object and declaring  internal values type
const tiktok: {user: string,followers:number,bio:string}={
   user: "",
   followers: 10000000,
   bio: "Furt does the programs!"
}
//assigning a value after init
tiktok.user = "furttech";

//---- Option Typed Objects

// creating an object with optional type values
const miner: {gold: number, silver?: number}={
  gold:99
}
// assigning post init
miner.silver = 1000;
// illegal assignment
//miner.gold = "buffufalow";

//---- Index Signatures

const productQuantityMap: { [index: string]: number } = {}

productQuantityMap.Waffles = 24;
productQuantityMap.pancakes = 30;

//-- ENUMS

enum ReturnCode {
   NOTFOUND = 404,
   SUCCESS = 200
}

let log = ReturnCode.SUCCESS;

console.log(log);

//-- String ENUMS
enum StringsofStrings {
  COW = 'moo',
  DOG = 'woof',
}
//-- output to console for some reason :P
console.log(StringsofStrings.COW);

/// --- Type Aliases And Interfaces


// declared some aliases
type DataStructures = string;
type CS2 = number;
type HTML = string;

// declare an object using such aliases
type Degree = {
  type: DataStructures,
  classname: CS2,
  language?: HTML,
}

const classes: DataStructures = "data structures";
const cname: CS2 = 102;

const deg: Degree ={
  type: classes ,
  classname: cname,
}

//--- interface

interface FarmAnimal {
  animalType: string, 
  stomachs: number,
  legs: number,
  hooves?: boolean,
}

const cow: FarmAnimal = {
  animalType: "bovine",
  stomachs: 4,
  legs: 4,
  hooves: true,
}

const chicken: FarmAnimal = {
  animalType: "bird",
  stomachs: 1,
  legs: 2,
  hooves: false,
}
// print objects to console
console.log(cow);
console.log(chicken);

// inheritance is fun

interface WetAnimal extends FarmAnimal {
  fins: number,
}

const nanermal: WetAnimal = {
  animalType: "fish",
  stomachs: 1,
  legs: 0,
  fins:2
}

console.log(nanermal);

// Union Parameter Type -> one | other

function printError( code: string | number ): string|number {

  return `ERROR LOG : ${code}`

}

console.log(printError("This is an Error!"));
console.log(printError(404));


// Managing Return

function getNum(): number {
  return 33;
}

// Parameter types
function getWaffle(waffle:string): string{
  return waffle;
}

// Default Parameter Types
function getDonut(donut:string="glazed") {
  return donut;
}

// Named parameters
function divide({ dividend, divisor }: { dividend: number, divisor: number }) : number{
  return dividend / divisor;
}

// Rest Params
function sum(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

/////--- Casting with AS -----////

let x: unknown = "waffle";
console.log((x as string).length);

let y: unknown = 'pancake';

// equiv but not in react :P
//console.log((<string>y).length);
console.log((y as string).length)

// force casting
let f = "force";
console.log(((f as unknown) as string).length)

/// TypeScript Classes

interface People{

  i:() => number;
  x:number;

}


/// inheritance with implements

class PurplePeople implements People {

  x:number = 45;
  
  public constructor(){

  }

  public i():number{
    return this.x;
  }

}

/// inheritance with implements 
class Person implements People {
  
  x:number = 3;
  private name: string | undefined ="";
  private age: string | number ="";

  public constructor(protected readonly n:string,protected readonly a:string|number){
    this.name = n;
    this.age=a;
  }

  private combined(){
    
    //return `${this.age}${this.name}`;
    //return this.age?.toString().concat('',(this.name as string ));
    return (this.age as string | number ).toString().concat('',(this.name as string));
    //return String(this.age)+String(this.name);

  }
  
  public i():number{
    return this.x;
  }

  public getName(){
    return this.name;
  }

  public getAge(){
    return this.age;
  }

  public getCombo(){
    return this.combined();
  }

}

/// Inheritance with Extends

class Aliens extends Person{

  public constructor(eyes:string){
    super(eyes,eyes);
  }

  public override getCombo(): string {
    return "Alphalpha";
  }

}

const alien = new Aliens("Large Almonds");
alien.getCombo();

// create a new instance of Person Class
const pers = new Person("Happy",344);
console.log(pers.getName);
console.log(pers.getAge);

pers.getCombo();

// Create a new instance of People Class
const p = new PurplePeople();
console.log(p.i());

// Abstract Classes

abstract class Polygon {

  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }

}

class Rectangle extends Polygon {

  public constructor(protected readonly width: number, protected readonly height: number){
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }

}

const rec = new Rectangle(10,10);
console.log(rec.toString());

// helper functions ///

function ListNameItem(props:any){
  return(
    <li> Name: [ {props.names} ]</li>
  )
}

function ListNumItem(props:any){
  return(
    <li> Number: [ {props.numbs} ]</li>
  )
}

function ListTupleItem(props:any){

  let change:any = props.tuples;

  if(change === false){
    change = "false";
  }else if(change === true){
    change = "true";
  }
  
  return(
    <li> Typed Tuple: [{change}]</li>
  )
}

function App() {
  return (
    <div className='container'>
      <div className='subContainer'>
        <h3>Names:</h3> 
        <ul>
          { addNames().map( (name:string)=> (<ListNameItem names={name}/>) )}
        </ul>
      </div>  
      <div className='subContainer'>
        <h3>Numbers:</h3>
        <ul>
          { addNumbers().map( (num:number) => (<ListNumItem numbs={num}/>) )}
        </ul>
      </div>
      <div className='subContainer'>
        <h3>Typed Tuples:</h3>
        <ul>
          { addTuples().map( (tuple:any)=>(<ListTupleItem tuples={tuple}/>) )}
        </ul>
      </div>
      <div className='subContainer'>
        <h3>Named Tuples:</h3>
        <ul>
          { namedTuples().map( (tuple:any)=>(<ListTupleItem tuples={tuple}/>) )}
        </ul>
      </div>
      <div className='subContainer'>
        <h3>Read Only:</h3>
        <ul>
          { readOnly().map( (str:string) => (<ListNameItem names={str}/>) )}
        </ul>
      </div>
    </div>
  );
}

export default App;
