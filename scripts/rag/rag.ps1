param(
    [Parameter(ValueFromRemainingArguments = $true)]
    [string[]]$Arguments
)

$bundledPython = "C:\Users\Meta\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"

function Resolve-Python {
    if ($env:AETHERIA_RAG_PYTHON -and (Test-Path $env:AETHERIA_RAG_PYTHON)) {
        return $env:AETHERIA_RAG_PYTHON
    }

    if (Test-Path $bundledPython) {
        return $bundledPython
    }

    $python = Get-Command python -ErrorAction SilentlyContinue
    if ($python) {
        return $python.Source
    }

    $pyLauncher = Get-Command py -ErrorAction SilentlyContinue
    if ($pyLauncher) {
        return "$($pyLauncher.Source) -3"
    }

    throw "No Python interpreter found. Set AETHERIA_RAG_PYTHON to a valid python.exe path."
}

$pythonCommand = Resolve-Python
$ragScript = Join-Path $PSScriptRoot "rag.py"

if ($pythonCommand -like "* -3") {
    & py -3 $ragScript @Arguments
}
else {
    & $pythonCommand $ragScript @Arguments
}

exit $LASTEXITCODE
