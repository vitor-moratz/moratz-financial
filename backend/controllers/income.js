const IncomeSchema = require("../models/IncomeModel");

exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    const income = IncomeSchema({
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
        res.status(200).json({message: 'Renda adicionada'})
    } catch (error) {
        res.status(500).json({message: 'Erro no servidor'})
    }

    console.log(income);
};

exports.getIncomes = async (req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Erro no servidor'})
    }
}

exports.deleteIncome = async (req, res) => {
    const {id} = req.params;
    IncomeSchema.findByIdAndDelete(id)
        .then((income) =>{ 
            res.status(200).json({message: 'Renda excluída'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Erro no servidor'})
        })
}