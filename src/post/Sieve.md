[에라토스테네스의 체](https://ko.wikipedia.org/wiki/에라토스테네스의_체) 구현하기  
Implementation of [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)

### Code
Python 3

```python
def getPrimes(n):
    isPrime = [True] * (n - 1) # 2 ~ n

    for p in range(2, n + 1):
        if isPrime[p - 2]:
            for m in range(p * 2, n + 1, p):
                isPrime[m - 2] = False

    return [p for p in range(2, n + 1) if isPrime[p - 2]]
```

### Example
#### Input
```python
print(getPrimes(1))
print(getPrimes(2))
print(getPrimes(13))
print(getPrimes(30))
```

#### Output
```python
[]
[2]
[2, 3, 5, 7, 11, 13]
[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
```
