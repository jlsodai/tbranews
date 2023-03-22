// dates
var dates = '';
$('span[data-qe-id="campaign-unit-date"]').each(function(e) {
    dates = dates + $(this).html().replace('Sent', '').trim() + "\n"
})

// console.log(dates)

// titles
var titles = '';
$('span[data-qe-id="campaignName"]').each(function(e) {
    titles = titles + $(this).attr('title') + "\n"
})

// console.log(titles)

// sends
var sends = '';
$('span[data-qe-id="reportstat-metric_send-figure"]').each(function(e) {
    sends = sends + $(this).html() + "\n"
})

// console.log(sends)

// opens
var opens = '';
$('span[data-qe-id="reportstat-metric_open-figure"]').each(function(e) {
    opens = opens + $(this).html() + "\n"
})

// console.log(opens)

// clicks
var clicks = '';
$('span[data-qe-id="reportstat-metric_click-figure"]').each(function(e) {
    clicks = clicks + $(this).html() + "\n"
})

// console.log(clicks)

// unsubscribes
var unsubscribes = '';
$('span[data-qe-id="reportstat-metric_unsubscribe-figure"]').each(function(e) {
    unsubscribes = unsubscribes + $(this).html() + "\n"
})

// console.log(unsubscribes)

console.log(dates + "\n\n" + titles + "\n\n" + sends + "\n\n" + opens + "\n\n" + clicks + "\n\n" + unsubscribes )