SELECT Users.name,
CASE 
    WHEN distance IS NULL THEN 0
    ELSE SUM(distance)
END as travelled_distance
FROM Users
LEFT JOIN Rides ON Rides.user_id = Users.id
GROUP BY Users.name, Users.id
ORDER BY travelled_distance DESC, Users.name ASC;