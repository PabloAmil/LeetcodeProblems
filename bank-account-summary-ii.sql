SELECT Users.name, SUM(Transactions.amount) as balance FROM Transactions 
LEFT JOIN 
    Users ON Transactions.account = Users.account
GROUP BY Transactions.account
HAVING balance > 10000