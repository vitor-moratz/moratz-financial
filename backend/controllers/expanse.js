const ExpenseSchema = require("../models/ExpenseModel");

exports.addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    const expense = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    });

    try {
        //validations
        if(!title || !category || !description || !date){
            return res.status(400).json({message: 'Todos os campos são necessários!'})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: 'O valor deve ser um número positivo!'})
        }
        await expense.save()
        res.status(200).json({message: 'Despesa adicionada'})
    } catch (error) {
        res.status(500).json({message: 'Erro no servidor'})
    }

    console.log(expense);
};

exports.getExpenses = async (req, res) => {
    try {
        const expenses = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({message: 'Erro no servidor'}) 
    }
}

exports.deleteExpense = async (req, res) => {
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((expense) =>{ 
            res.status(200).json({message: 'Despesa excluída'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Erro no servidor'})
        })
}