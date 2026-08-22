# Bundle.ps1 - Clean bin/obj and create a zip archive of the project

# 1. Remove all bin and obj folders recursively
Write-Host "🧹 Removing bin and obj folders..." -ForegroundColor Cyan
Get-ChildItem -Recurse -Directory -Include bin, obj | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "✅ Cleanup complete." -ForegroundColor Green

# 2. Define zip file name
$FolderName = Split-Path -Leaf (Get-Location)
$ZipName = "$FolderName-$(Get-Date -Format 'yyyyMMdd-HHmmss').zip"
$ZipPath = Join-Path (Get-Location) $ZipName

# 3. Get all items EXCEPT the script and existing zip files
Write-Host "📦 Creating archive: $ZipName" -ForegroundColor Cyan

# Get items to zip (exclude this script and any .zip files)
$ItemsToZip = Get-ChildItem -Path . | Where-Object {
    $_.Name -ne $MyInvocation.MyCommand.Name -and $_.Name -notlike "*.zip"
}

# 4. Create the zip archive
Compress-Archive -Path $ItemsToZip -DestinationPath $ZipPath -CompressionLevel Optimal -Force

if (Test-Path $ZipPath) {
    Write-Host "✅ Archive created: $ZipPath" -ForegroundColor Green
    Write-Host "📁 Size: $([math]::Round((Get-Item $ZipPath).Length / 1MB, 2)) MB" -ForegroundColor Yellow
} else {
    Write-Host "❌ Failed to create archive." -ForegroundColor Red
}
