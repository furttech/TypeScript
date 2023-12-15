import { MAP_LIST, dataMapper } from "./dataMap";
import './App.css';

////////------- type exploration  -------////////

function addNames(): Array<{id:number;name:string;}>{
  
  // long gone are the days of declaring simple arrays
  // wrong -> non unique key values
  // const names: string[] = ["jane","john","josh"];

  // create a basic array object filled with strings
  const names: {id:number,name:string}[] = [{id:0,name:"jane"},{id:1,name:"john"},{id:2,name:"josh"}];
  return names;

}

function addNumbers(): number[]{
  
  const numbers: number[] = [3,6,9];

  numbers.map((val:any): dataMapper =>({
    number:val
  }))


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

////////------- Typed Objects  -------////////

// creating an object and declaring  internal values type
const tiktok: {user: string,followers:number,bio:string}={
   user: "",
   followers: 10000000,
   bio: "Furt does the programs!"
}
//assigning a value after init
tiktok.user = "furttech";

////////------- Option Typed Objects  -------////////

// creating an object with optional type values
const miner: {gold: number, silver?: number}={
  gold:99
}
// assigning post init
miner.silver = 1000;
// illegal assignment
//miner.gold = "buffufalow";

////////-------  Index Signatures  -------////////

const productQuantityMap: { [index: string]: number } = {}

productQuantityMap.Waffles = 24;
productQuantityMap.pancakes = 30;

////////------- ENUMS

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

////////------- Type Aliases And Interfaces  -------////////


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

////////------- interface  --------////////

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

////////------- Union Parameter Type -> one | other -------////////

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
////////------- Casting with AS ----------////////

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

////////------- inheritance with implements -------////////

class PurplePeople implements People {

  x:number = 45;
  
  public constructor(){

  }

  public i():number{
    return this.x;
  }

}

////////------- inheritance with implements  -------////////
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
    return (this.age as string | number ).toString().concat((this.name as string));
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


////////------- Inheritance with Extends -------////////

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

////////------- Abstract Classes -------////////

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


////////------- TypeScript Generics -------////////

function unitGeneric<S>(k1:S):[S]{
  return [k1];
}

function pairGeneric<S,D>(k1:S,k2:D):[S,D]{
  return [k1,k2];
}

function tripleGeneric<S,D,F>(k1:S,k2:D,k3:F):[S,D,F]{
  return [k1,k2,k3];
}

const metal = unitGeneric<string|number>("gold");
const metals = pairGeneric<string,number>("gold",100);
const allMetals = tripleGeneric<string,number|string,number>("gold","oz",10);

console.log(metal,metals,allMetals);

abstract class Car<C>{

  private _value: C | undefined;

  public setInternalValue(val:C){
    this._value=val;
  }

  public getInternalValue():C | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this._value}`;
  }

}

class RaceCar extends Car <string|number>{

   public constructor(private n:string){
     super();
  }

  public setCarNumber(v:number|string){
    super.setInternalValue(v);
  }

  public getCarNumber(){
    return super.getInternalValue;
  }

  public override toString(): string {
    return `Type: ${this.n} , Number: ${super.getInternalValue()}`;
  }
}


let car = new RaceCar("Race Car");
car.setCarNumber("33");
console.log(car.toString());

// Typed Alias using Generics

type Vehicle<T,V> = {k1:T,k2:V};

const carTyped:Vehicle<string,number>= {k1:"honda",k2:1995};

// Adding Default Values using Generic types and using extends

class Simple<S extends number|string, R = string>{

  private _value: S | undefined;
  private _n: R | undefined;

  public constructor(n:R){
    this._n=n;
  }

  public setInternalValue(v:S){
    this._value=v;
  }

  public getInternalValue(){
    return this._value;
  }

  public toString():string{
    return `N: ${this._n} => Value: ${this._value}`;
  }

}

const simp = new Simple("kiss");
simp.setInternalValue(44);
const out = simp.toString();
console.log(out);

////////------- Utility Types  -------////////



////////------- helper functions  -------////////

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
      <div className="subContainer">
        <h3>Data Map:</h3>
        <ul>
          {MAP_LIST.map( ({id, name}: dataMapper) => {return <ListNameItem key={id} names={name}/>})}
        </ul>
      </div>
      <div className='subContainer'>
        <h3>Names:</h3> 
        <ul>
          { 

          addNames().map( ({id,name}: dataMapper)=> {return <ListNameItem key={id} names={name} /> } )

          // addNames().map( (name:string) => { return <ListNameItem names={name} indexes/> } )
          
          }
        </ul>
      </div>  
      <div className='subContainer'>
        <h3>Numbers:</h3>
        <ul>
          { addNumbers().map( (num:number, id:number) => (<ListNumItem key={id} numbs={num}/>) )}
        </ul>
      </div>
      <div className='subContainer'>
        <h3>Typed Tuples:</h3>
        <ul>
          { addTuples().map( (tuple:any,id:number)=>(<ListTupleItem key={id} tuples={tuple}/>) )}
        </ul>
      </div>
      <div className='subContainer'>
        <h3>Named Tuples:</h3>
        <ul>
          { namedTuples().map( (tuple:any,id:number)=>(<ListTupleItem key={id} tuples={tuple}/>) )}
        </ul>
      </div>
      <div className='subContainer'>
        <h3>Read Only:</h3>
        <ul>
          { readOnly().map( (str:string,id:number) => (<ListNameItem key={id} names={str}/>) )}
        </ul>
      </div>
    </div>
  );
}

export default App;
