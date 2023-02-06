import { Progress } from 'antd'
import React from 'react'

const Analytics = ({ allTransection }) => {
    // Category
    const categories = ['salary', 'tip', 'project', 'food', 'movie', 'bills', 'medical', 'fee', 'tax',]
    // Total Transaction
    const totalTransaction = allTransection.length
    const totalIncomeTransactions = allTransection.filter(transaction => transaction.type === 'income')
    const totalExpenseTransactions = allTransection.filter(transaction => transaction.type === 'expense')
    const totalIncomePercent = (totalIncomeTransactions.length / totalTransaction) * 100
    const totalExpensePercent = (totalExpenseTransactions.length / totalTransaction) * 100

    // Total turnover
    const totalTurnover = allTransection.reduce((acc, transaction) => acc + transaction.amount, 0);
    const totalIncomeTurnover = allTransection.filter(transaction => transaction.type === "income").reduce((acc, transaction) => acc + transaction.amount, 0);
    const totalExpenseTurnover = allTransection.filter(transaction => transaction.type === "expense").reduce((acc, transaction) => acc + transaction.amount, 0);
    const totalIncomeTurnoverPercent = (totalIncomeTurnover / totalTurnover) * 100;
    const totalExpenseTurnoverPercent = (totalExpenseTurnover / totalTurnover) * 100;

    return (
        <div className='container'>

            <div className="row">
                <div className="col d-inline-flex">
                    <div className="col mx-2">
                        <h4 className='text-danger text-center'>Total Transactions</h4>
                        <div className="card">
                            <div className="card-header">
                                Total Transactions : {totalTransaction}
                            </div>
                            <div className="card-body">
                                <h5 className='text-success'>Income : {totalIncomeTransactions.length}</h5>
                                <h5 className='text-danger'>Expense : {totalExpenseTransactions.length}</h5>
                                <div>
                                    <Progress type='circle' strokeColor={'green'} className='mx-2 my-2' percent={totalIncomePercent.toFixed(0)} />
                                    <Progress type='circle' strokeColor={'red'} className='mx-2' percent={totalExpensePercent.toFixed(0)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h4 className='text-danger text-center'>Total Turnover</h4>
                        <div className="card">
                            <div className="card-header">
                                Total Turnover : {totalTurnover}
                            </div>
                            <div className="card-body">
                                <h5 className='text-success'>Income : {totalIncomeTurnover}</h5>
                                <h5 className='text-danger'>Expense : {totalExpenseTurnover}</h5>
                                <div>
                                    <Progress type='circle' strokeColor={'green'} className='mx-2 my-2' percent={totalIncomeTurnoverPercent.toFixed(0)} />
                                    <Progress type='circle' strokeColor={'red'} className='mx-2' percent={totalExpenseTurnoverPercent.toFixed(0)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col d-inline-flex">
                    {/* Income Categorywies*/}
                    <div className="col mx-2">
                        <h4 className='text-danger text-center'>Category Income</h4>
                        {
                            categories.map(category => {
                                const amount = allTransection.filter(transaction => transaction.type === 'income' && transaction.category === category).reduce((acc, transaction) => acc + transaction.amount, 0);
                                return (
                                    amount > 0 && (
                                        <div className="card">
                                            <div className="card-body">
                                                <h5>{category}</h5>
                                                <Progress percent={((amount / totalIncomeTurnover) * 100).toFixed(0)} />
                                            </div>
                                        </div>)
                                )
                            })
                        }
                    </div>
                    {/*Expense  Categorywies */}
                    <div className="col">
                        <h4 className='text-danger text-center'>Category Expense</h4>
                        {
                            categories.map(category => {
                                const amount = allTransection.filter(transaction => transaction.type === 'expense' && transaction.category === category).reduce((acc, transaction) => acc + transaction.amount, 0);
                                return (
                                    amount > 0 && (
                                        <div className="card">
                                            <div className="card-body">
                                                <h5>{category}</h5>
                                                <Progress percent={((amount / totalExpenseTurnover) * 100).toFixed(0)} />
                                            </div>
                                        </div>
                                    )
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics