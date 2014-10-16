// Generated automatically by nearley
(function () {
function id(x) {return x[0]; }
var grammar = {
    ParserRules: [
    {"name": "main", "symbols": ["_", "AS", "_"], "postprocess":  function(d) {return d[1]; } },
    {"name": "P", "symbols": [{"literal":"("}, "_", "AS", "_", {"literal":")"}], "postprocess":  function(d) {return d[2]; } },
    {"name": "P", "symbols": ["N"], "postprocess":  id },
    {"name": "E", "symbols": ["P", "_", {"literal":"^"}, "_", "E"], "postprocess":  function(d) {return Math.pow(d[0], d[4]); } },
    {"name": "E", "symbols": ["P"], "postprocess":  id },
    {"name": "MD", "symbols": ["MD", "_", {"literal":"*"}, "_", "E"], "postprocess":  function(d) {return d[0]*d[4]; } },
    {"name": "MD", "symbols": ["MD", "_", {"literal":"/"}, "_", "E"], "postprocess":  function(d) {return d[0]/d[4]; } },
    {"name": "MD", "symbols": ["E"], "postprocess":  id },
    {"name": "AS", "symbols": ["AS", "_", {"literal":"+"}, "_", "MD"], "postprocess":  function(d) {return d[0]+d[4]; } },
    {"name": "AS", "symbols": ["AS", "_", {"literal":"-"}, "_", "MD"], "postprocess":  function(d) {return d[0]-d[4]; } },
    {"name": "AS", "symbols": ["MD"], "postprocess":  id },
    {"name": "N", "symbols": ["float"], "postprocess":  id },
    {"name": "N$1", "symbols": [{"literal":"s"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {
        return d.join('');
    }},
    {"name": "N", "symbols": ["N$1", "_", "P"], "postprocess":  function(d) {return Math.sin(d[2]); } },
    {"name": "N$2", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"s"}], "postprocess": function joiner(d) {
        return d.join('');
    }},
    {"name": "N", "symbols": ["N$2", "_", "P"], "postprocess":  function(d) {return Math.cos(d[2]); } },
    {"name": "N$3", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {
        return d.join('');
    }},
    {"name": "N", "symbols": ["N$3", "_", "P"], "postprocess":  function(d) {return Math.tan(d[2]); } },
    {"name": "N$4", "symbols": [{"literal":"a"}, {"literal":"s"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {
        return d.join('');
    }},
    {"name": "N", "symbols": ["N$4", "_", "P"], "postprocess":  function(d) {return Math.asin(d[2]); } },
    {"name": "N$5", "symbols": [{"literal":"a"}, {"literal":"c"}, {"literal":"o"}, {"literal":"s"}], "postprocess": function joiner(d) {
        return d.join('');
    }},
    {"name": "N", "symbols": ["N$5", "_", "P"], "postprocess":  function(d) {return Math.acos(d[2]); } },
    {"name": "N$6", "symbols": [{"literal":"a"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {
        return d.join('');
    }},
    {"name": "N", "symbols": ["N$6", "_", "P"], "postprocess":  function(d) {return Math.atan(d[2]); } },
    {"name": "N$7", "symbols": [{"literal":"p"}, {"literal":"i"}], "postprocess": function joiner(d) {
        return d.join('');
    }},
    {"name": "N", "symbols": ["N$7"], "postprocess":  function(d) {return Math.PI; } },
    {"name": "N", "symbols": [{"literal":"e"}], "postprocess":  function(d) {return Math.E; } },
    {"name": "N$8", "symbols": [{"literal":"s"}, {"literal":"q"}, {"literal":"r"}, {"literal":"t"}], "postprocess": function joiner(d) {
        return d.join('');
    }},
    {"name": "N", "symbols": ["N$8", "_", "P"], "postprocess":  function(d) {return Math.sqrt(d[2]); } },
    {"name": "N$9", "symbols": [{"literal":"l"}, {"literal":"n"}], "postprocess": function joiner(d) {
        return d.join('');
    }},
    {"name": "N", "symbols": ["N$9", "_", "P"], "postprocess":  function(d) {return Math.log(d[2]); }  },
    {"name": "float", "symbols": ["int", {"literal":"."}, "int"], "postprocess":  function(d) {return parseFloat(d[0] + d[1] + d[2])} },
    {"name": "float", "symbols": ["int"], "postprocess":  function(d) {return parseInt(d[0])} },
    {"name": "int", "symbols": [/[0-9]/], "postprocess":  id },
    {"name": "int", "symbols": ["int", /[0-9]/], "postprocess":  function(d) {return d[0] + d[1]} },
    {"name": "_", "symbols": [], "postprocess":  function(d) {return null; } },
    {"name": "_", "symbols": [/[\s]/, "_"], "postprocess":  function(d) {return null; } }
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
