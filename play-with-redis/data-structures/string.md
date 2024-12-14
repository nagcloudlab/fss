# Set a value

SET user:1:name "Alice"

# Output: OK

# Get a value

GET user:1:name

# Output: "Alice"

# Set multiple values

MSET user:1:age 30 user:1:country "USA"

# Output: OK

# Get multiple values

MGET user:1:age user:1:country

# Output: ["30", "USA"]

# Append a value

APPEND user:1:name " Johnson"

# Output: 13 (new length of the string)

# Get the new value

GET user:1:name

# Output: "Alice Johnson"

# Increment an integer value

SET user:1:logins 5
INCR user:1:logins

# Output: 6

# Decrement an integer value

DECR user:1:logins

# Output: 5

# Increment by a specific value

INCRBY user:1:logins 10

# Output: 15

# Set a value with expiration

SETEX session:12345 3600 "session_data"

# Output: OK

# Get a substring

GETRANGE user:1:name 0 4

# Output: "Alice"

# Overwrite part of a string

SETRANGE user:1:name 6 "Smith"

# Output: 10

# Get the new value

GET user:1:name

# Output: "Alice Smith"
