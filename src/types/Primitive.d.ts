type Tuple = [string, string];

type primitive = null|number|boolean|string|primitive[];

type Json = {
    [key: string]: primitive|Json;
}