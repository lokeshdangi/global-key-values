# global-key-values

A lightweight key value store that makes the stored values globally available.

# Usage

```
import { GlobalStore } from "global-key-values"
```

## Set

```
GlobalStore.set(<key>,<value>)
```

## Set multiple

```

GlobalStore.setMultiple([
                        { key:<key>,value:<value> },
                        { key:<key>,value:<value> }
                        ])
```

## Get

```
const value = GlobalStore.get(<key>)
```

## Get multiple

```
const values = GlobalStore.get([<key>,<key>])
```

## Remove key

```
GlobalStore.remove(<key>)
```

## Remove multiple

```
GlobalStore.removeMultiple([<key>,<key>])
```

## Add listener

```
const listener  = GlobalStore.addListener(<listener name>,<callback function>)
```

## Remove listener

```
GlobalStore.removeListener(<listener name>)
```

## Remove all listeners

```
GlobalStore.removeAllListeners()
```

## Get all keys

```
GlobalStore.getAllKeys()
```

## Check if key exist

```
GlobalStore.contains(<key>)
```

## Clear store

```
GlobalStore.clear()
```
