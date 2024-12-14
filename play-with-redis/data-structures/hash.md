# Create a hash and set fields

HSET user:1000 name "John Doe" age "30" country "USA"

# Output: 1 (number of fields added)

# Retrieve a specific field

HGET user:1000 name

# Output: "John Doe"

# Set multiple fields at once

HMSET user:1000 email "john.doe@example.com" phone "123-456-7890"

# Output: OK

# Get multiple fields

HMGET user:1000 name email

# Output: ["John Doe", "john.doe@example.com"]

# Get all fields and values

HGETALL user:1000

# Output: ["name", "John Doe", "age", "30", "country", "USA", "email", "john.doe@example.com", "phone", "123-456-7890"]

# Check if a field exists

HEXISTS user:1000 age

# Output: 1

# Delete a field

HDEL user:1000 phone

# Output: 1 (number of fields removed)

# Get the number of fields in the hash

HLEN user:1000

# Output: 4

# Increment an integer field

HSET user:1000 login_count 10
HINCRBY user:1000 login_count 5

# Output: 15

# Increment a float field

HSET user:1000 balance 100.5
HINCRBYFLOAT user:1000 balance 10.25

# Output: 110.75

# Get all fields

HKEYS user:1000

# Output: ["name", "age", "country", "email", "login_count", "balance"]

# Get all values

HVALS user:1000

# Output: ["John Doe", "30", "USA", "john.doe@example.com", "15", "110.75"]
