import React,{Component} from 'react';


export default class ATM extends Component{
    constructor(props){
        super(props);
        this.state={
            "amount":0,
            "dispensed":0,
            "arrayForNotes":[],
            "notesArray":[2000,500,200,100,50,20,10,5,2,1]
        }
    }
    handleAmountChange=(data)=>{
    let val=parseInt(data.target.value);
       if(!Number.isNaN(val) && Number.isInteger(val)){
           this.setState(state=>{
               return state.amount=val
           },()=>{
               console.log(this.state.amount,"------input value")
           })
       }
    }
    handleClick=()=>{
        const {amount,notesArray}=this.state;
        console.log(amount,"----");
        let total=amount;
        let array1=[];
        let dispensedNotes=0
        if(notesArray.length>0){
            notesArray.forEach((item)=>{
                array1.push(Math.round(total/item))
                dispensedNotes+=Math.round(total/item)
                total=total%item
            })
            console.log(total,array1)
            this.setState({arrayForNotes:array1,dispensed:dispensedNotes})
        }

    }
    render(){
        const {arrayForNotes,dispensed}=this.state;
        console.log(arrayForNotes,"-dfgfdg---")
        return(
            <div style={{"display":"flex"}}>
            <div style={{width:"50%"}}>
                <h1>Welcome to ATM</h1>
                <form >
                    <label>Enter the Amount</label>
                    <input type="text" placeholder="Enter Amount" onChange={this.handleAmountChange}/>
                    <button type="button" onClick={this.handleClick}>Get Money</button>
                </form>
            </div>
            <div style={{"width":"50%"}}>
                <h2>You will get following amount</h2>
                <table>
                    <tr>
                    {arrayForNotes.length>0?arrayForNotes[9]:0}

                    <td>
                    Notes of Rs 1

                    </td>
                    </tr>

                    <tr>
                    {arrayForNotes.length>0?arrayForNotes[8]:0}

                    <td>
                    Notes of Rs 2

                    </td>                    </tr>

                    <tr>
                    {arrayForNotes.length>0?arrayForNotes[7]:0}

                    <td>
                    Notes of Rs 5

                    </td>
                    </tr>

                    <tr>
                    {arrayForNotes.length>0?arrayForNotes[6]:0}

                    <td>
                    Notes of Rs 10

                    </td>
                    </tr>

                    <tr>
                    {arrayForNotes.length>0?arrayForNotes[5]:0}

                    <td>
                    Notes of Rs 20

                    </td>
                    </tr>
                    <tr>
                    {arrayForNotes.length>0?arrayForNotes[4]:0}


                    <td>
                    Note of Rs 50

                    </td>
                    </tr>

                    <tr>
                    {arrayForNotes.length>0?arrayForNotes[3]:0}

                    <td>
                    Note of Rs 100

                    </td>

                    </tr>

                    <tr>
                    {arrayForNotes.length>0?arrayForNotes[2]:0}

                    <td>
                    Note of Rs 200

                    </td>
                    </tr>

                    <tr>
                    {arrayForNotes.length>0?arrayForNotes[1]:0}

                    <td>
                    Note of Rs 500

                    </td>
                    </tr>

                    <tr>
                    {arrayForNotes.length>0?arrayForNotes[0]:0}

                    <td>
                    Note of Rs 2000

                    </td>
                    </tr>
                </table>
        <h2>Total notes dispensed: {dispensed}</h2>
            </div>
            </div>
        )
    }
}