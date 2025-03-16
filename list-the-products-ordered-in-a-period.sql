SELECT Products.product_name, SUM(Orders.unit) as unit 
FROM Products JOIN Orders ON Orders.product_id = Products.product_id 
WHERE Orders.order_date BETWEEN '2020-02-01' AND '2020-02-29'
GROUP BY Products.product_name
HAVING SUM(Orders.unit) >= 100;