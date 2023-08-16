<?php

function markdown($text)
{
	return preg_replace('#\*{2}(.*?)\*{2}#', '<b>$1</b>', $text);
}