
## connect to kong zone and enable mesh on all services

``` bash
kumactl apply -f mesh.yaml -f allow-all.yaml
kubectl apply -f hello-world.yaml -f ratings.yaml -f directory.yaml
```
### Generate JWTs and JWKs using the link (https://www.scottbrady91.com/tools/jwt) store this public key in github gist and use that as a JWKS endpoint
{
  "crv": "P-256",
  "d": "h_-ruTXrWlrQjbqK9BHkqIGH96IYhr78fRdUE-ZhDEs",
  "key_ops": [
    "sign"
  ],
  "kty": "EC",
  "x": "rsGCkqf46Ury72bMWLXeRXAxGKFYeGfRamhsw6ARuX0",
  "y": "7Z56s0adStfDYzaSJiLEYmP1-XPIUgCPiGPlEkUtxrM",
  "alg": "ES256",
  "use": "sig",
  "kid": "e48ffa16b6e2e33dc8de10e7b9c9b313"
}
{
  "crv": "P-256",
  "key_ops": [
    "verify"
  ],
  "kty": "EC",
  "x": "rsGCkqf46Ury72bMWLXeRXAxGKFYeGfRamhsw6ARuX0",
  "y": "7Z56s0adStfDYzaSJiLEYmP1-XPIUgCPiGPlEkUtxrM",
  "alg": "ES256",
  "use": "sig",
  "kid": "e48ffa16b6e2e33dc8de10e7b9c9b313"
}

### Amrutha JWT:
``` bash
export AJWT="eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6ImU0OGZmYTE2YjZlMmUzM2RjOGRlMTBlN2I5YzliMzEzIn0.eyJzdWIiOiIxMjMifQ.dvT8cH7Y6Fo7pK02W14GctdJ7y_G1N98g_5HSCDcbQpyj9dJfivXgstygVcjcy5VuRYTKDMrnBKrsypg2YSnqg"
```

### Vivian JWT:
``` bash
export VJWT="eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6ImU0OGZmYTE2YjZlMmUzM2RjOGRlMTBlN2I5YzliMzEzIn0.eyJzdWIiOiIyMzQifQ.j0RLUboOebUrrAq3_R0DHsM3v9wvlgoS7cTSq2pzhsFt9-oWo7DBnwMBo71Z98suz1YOduWr8dVSOsN_bOO3Cg"
```

### Charlie JWT:
``` bash
export CJWT="eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6ImU0OGZmYTE2YjZlMmUzM2RjOGRlMTBlN2I5YzliMzEzIn0.eyJzdWIiOiIzNDUifQ.kV06r6d7sR6CprInBmLWn4-PEiUHJHLmrUky4MdTFscOZcGKAkfWn1iaZafU_u_wHmAnrD1s-6VKv39B9FlpXw"
```
### Max JWT:
``` bash
export MJWT="eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6ImU0OGZmYTE2YjZlMmUzM2RjOGRlMTBlN2I5YzliMzEzIn0.eyJzdWIiOiI0NTYifQ.SlO8E-By6-expk2JgYdJWWi_QjDdSKrH-dj3eaTMH_nRIFkw2A86YlfC9bUyUY75UVGqnzjyHg61492Xx3JFrg"
```
### Access employeeRating service from hello-world pod

```bash
kubectl -n hello-world exec -it hello-world-5bc5c94689-swp4w -- curl http://ratings.employee/employeeRating/Amrutha
```
### Implement authorization controls using MeshOPA policy, and use proxy-patch policy to make the http calls initiated from OPA (sidecar) work
```kumactl apply -f mesh-opa-policy.yaml -f proxy-patch.yaml ```

### Access employeeRating service from hello-world pod passing JWT in the request
```bash
kubectl -n hello-world exec -it deploy/hello-world -- curl -i -H "Authorization: Bearer $AJWT" http://ratings.employee/employeeRating/Amrutha
```
### To access employeeDirectory service (for testing)
kubectl -n hello-world exec -it <hello-world-pod> -- curl -i http://directory.employee/employeeDirectory/Amrutha