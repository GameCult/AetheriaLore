param(
    [ValidateSet("build", "dev")]
    [string]$Command = "dev"
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$quartzRoot = Join-Path $repoRoot "quartz-site"
$portableNodeRoot = Join-Path $repoRoot ".tools\node-v24.15.0-win-x64"
$portableNpm = Join-Path $portableNodeRoot "npm.cmd"

if (Test-Path $portableNpm) {
    $npm = $portableNpm
    $env:PATH = "$portableNodeRoot;$env:PATH"
} else {
    $npmCommand = Get-Command npm -ErrorAction SilentlyContinue
    if (-not $npmCommand) {
        throw "npm was not found. Install Node.js or restore the portable runtime under .tools."
    }

    $npm = $npmCommand.Source
}

$env:npm_config_cache = Join-Path $repoRoot ".npm-cache"

$scriptArgs = switch ($Command) {
    "build" { @("run", "build") }
    "dev" { @("run", "dev") }
}

Push-Location $quartzRoot
try {
    & $npm @scriptArgs
} finally {
    Pop-Location
}
