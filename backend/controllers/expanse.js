const ExpenseSchema = require("../models/ExpenseModel");

exports.addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    const income = ExpenseSchema({
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
        await income.save()
        res.status(200).json({message: 'Despesa adicionada'})
    } catch (error) {
        res.status(500).json({message: 'Erro no servidor'})
    }

    console.log(income);
};

exports.getExpense = async (req, res) => {
    try {
        const incomes = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Erro no servidor'}) 
    }
}

exports.deleteExpense = async (req, res) => {
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((income) =>{ 
            res.status(200).json({message: 'Despesa excluída'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Erro no servidor'})
        })
}