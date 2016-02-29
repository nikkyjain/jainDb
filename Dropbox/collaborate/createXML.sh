#!/bin/sh


# Add Header
convert=0
curDir=$(basename $PWD | sed -e 's/.*_//')
curDir=$(basename $PWD)
parentDir=$(basename $(dirname $PWD) | sed -e 's/.*_//')
parentDir=$(basename $(dirname $PWD))
gradFatherDir=$(basename $(dirname $(dirname $PWD)))
pDir=$(basename $PWD)
export dbDir=$(echo $PWD | perl -i -pe 's/(.*Dropbox).*/$1/g')
outDir="$dbDir/Public/HTML/myWebsite/jainDataBase/$gradFatherDir/$parentDir/$curDir"
outFile="$outDir/myXML.txt"
fromDir=$outDir
toDir="$dbDir/collaborate/website/jainDataBase/$gradFatherDir/$parentDir/$curDir"
/bin/mkdir -p $toDir
#echo HaHa:$fromDir:$toDir

[ "$1" = "-c" ] && convert=1

echo "<book>" > $outFile

while read cFile; do
  #q=`echo $p | sed 's/.txt//'`
  cFile=$(echo "$cFile" | tr -d '\r')
  sFile=`echo $cFile | sed 's/.txt//'`
  curFile=main/$cFile
  [ ! -f "$curFile" ] && echo "Didnt find $curFile" && exit 1
  [ "$convert" = "1" ] && dos2unix $curFile
  echo "  <page>" >> $outFile
  echo "    <name>$sFile</name>" >> $outFile
  echo "    <main>`cat $curFile | \
    perl -i -pe 's/\(\(/<b><span class=abc>/g' | \
    perl -i -pe 's/\)\)/<\/b><\/span>/g' | \
    perl -i -pe 's/</&lt;/g' | \
    perl -i -pe 's/>/&gt;/g'`</main>" >> $outFile
  [ "$convert" = "1" ] && unix2dos $curFile
  curFile=title/$cFile
  if [ -f "$curFile" ]; then
    [ "$convert" = "1" ] && dos2unix $curFile
    echo "    <title>`cat $curFile`</title>" >> $outFile
    [ "$convert" = "1" ] && unix2dos $curFile
  fi
  curFile=bottom/$cFile
  if [ -f "$curFile" ]; then
    [ "$convert" = "1" ] && dos2unix $curFile
    echo "    <bottom>`cat $curFile | perl -i -pe 's/</&lt;/g' | perl -i -pe 's/>/&gt;/g'`</bottom>" >> $outFile
    [ "$convert" = "1" ] && unix2dos $curFile
  fi
  curFile=tooltip/$cFile
  if [ -f "$curFile" ]; then
    [ "$convert" = "1" ] && dos2unix $curFile
    echo "    <tooltip>`cat $curFile`</tooltip>" >> $outFile
    [ "$convert" = "1" ] && unix2dos $curFile
  fi
  cFile=`echo $cFile | sed 's/.txt//'`
  iFile="$cFile.jpg"
  curFile=images/$iFile
  #echo "Vishal:$curFile"
  if [ -f "$outDir/$curFile" ]; then
	fullPath=`readlink -f $outDir/$curFile`
	fullPath=`echo $fullPath | sed 's/.*jainDataBase/jainDataBase/'`
    #echo "Vishal:$fullPath"
    echo "    <image>$fullPath</image>" >> $outFile
  fi
  echo "  </page>" >> $outFile
  echo "Processed $cFile"
done < "index.txt"

# Add Footer
echo "</book>" >> $outFile
unix2dos $outFile

/bin/cp -r $fromDir/* $toDir/.
