PARSER_BEGIN(ololo)

public class ololo {
    public static void main(String[] args){
        System.out.println("ololo");
    }
}

PARSER_END(ololo)

SKIP:  { " " | "\t" | "\n" | "\r"                    }
TOKEN: { "(" | ")" | "+" | "*" | <NUM: (["0"-"9"])+> }

void S(): {} { E() <EOF>           }
void E(): {} { T() ("+" T())*      }
void T(): {} { F() ("*" F())*      }
void F(): {} { <NUM> | "(" E() ")" }