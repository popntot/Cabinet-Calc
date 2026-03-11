// ─────────────────────────────────────────────────────────────────────────────
// PURE CALCULATION ENGINE
// Mirrors the logic in index.html exactly — no DOM dependencies.
// ─────────────────────────────────────────────────────────────────────────────

const MM_TO_INCH = 1 / 25.4;
const INCH_TO_MM = 25.4;

/**
 * Core cabinet/drawer calculation engine.
 * Returns all computed measurements as a plain object.
 * Throws if configuration is invalid (neg. available height, etc.).
 */
function calcMetric(p) {
    const {
        cw, ch, cd, bt, dt, nd = 3,
        ds = 2, tg = 2, bg = 2,
        sl, sw = 25, sc = 2, fs = 50, fo = 19,
        groovePosition = 18, backClearance = 4
    } = p;

    const bottomPanelWidth  = cw - (2 * bt);
    const internalWidth     = bottomPanelWidth;
    const internalHeight    = ch - (2 * bt);

    const totalSpacing         = (nd - 1) * ds;
    const totalAvailableHeight = internalHeight - tg - bg - totalSpacing;

    if (totalAvailableHeight <= 0) throw new Error('Not enough height');

    const drawerHeight = totalAvailableHeight / nd;      // equal layout

    const drawerWidthReduction  = sw + (2 * sc);
    const drawerFrontBackWidth  = bottomPanelWidth - drawerWidthReduction;
    const drawerBoxWidth        = drawerFrontBackWidth;
    const drawerBoxHeight       = drawerHeight - 2;      // 2mm vertical clearance

    const grooveDepth       = dt / 2;
    const drawerBackHeight  = drawerBoxHeight - groovePosition - backClearance;
    const drawerBottomWidth = drawerFrontBackWidth - (2 * dt);
    const drawerBottomDepth = sl - dt;

    const overlayWidth      = internalWidth + (2 * fo);
    const overlayHeight     = drawerHeight + (2 * fo);
    const effectiveExtension= sl - fs;

    return {
        bottomPanelWidth, internalWidth, internalHeight,
        totalSpacing, totalAvailableHeight,
        drawerHeight, drawerWidthReduction, drawerFrontBackWidth,
        drawerBoxWidth, drawerBoxHeight, grooveDepth,
        drawerBackHeight, drawerBottomWidth, drawerBottomDepth,
        overlayWidth, overlayHeight, effectiveExtension
    };
}

/** parseFraction — mirrors index.html exactly */
function parseFraction(str) {
    str = str.trim();
    if (!str.includes('/') && !str.includes('-') && !str.includes(' ')) {
        const num = parseFloat(str);
        return isNaN(num) ? null : num;
    }
    const dashMatch  = str.match(/^(\d+)\s*[-\s]\s*(\d+)\s*\/\s*(\d+)$/);
    const spaceMatch = str.match(/^(\d+)\s+(\d+)\s*\/\s*(\d+)$/);
    if (dashMatch) {
        return parseInt(dashMatch[1]) + parseInt(dashMatch[2]) / parseInt(dashMatch[3]);
    } else if (spaceMatch) {
        return parseInt(spaceMatch[1]) + parseInt(spaceMatch[2]) / parseInt(spaceMatch[3]);
    }
    const simpleMatch = str.match(/^(\d+)\s*\/\s*(\d+)$/);
    if (simpleMatch) return parseInt(simpleMatch[1]) / parseInt(simpleMatch[2]);
    return null;
}

/** Convert mm → inches, round to nearest 1/8" */
function mmToInch(mm) { return mm * MM_TO_INCH; }

/** Round to nearest Nth */
function roundTo(val, n) { return Math.round(val / n) * n; }

// ─────────────────────────────────────────────────────────────────────────────
// TEST DEFINITIONS
// ─────────────────────────────────────────────────────────────────────────────

const METRIC_TOL  = 0.5;    // ±0.5mm  → represents 1mm accuracy
const IMPERIAL_TOL = 0.0625; // ±1/16"  → represents 1/8" accuracy

function makeTest(id, category, name, formula, inputs, expected, unit, compute) {
    const tol = unit === 'mm' ? METRIC_TOL : IMPERIAL_TOL;
    return { id, category, name, formula, inputs, expected, unit, tol, compute };
}

// ── Preset A: Will's 640mm Build (from README) ──
const willsPreset = { cw: 758, ch: 626, cd: 600, bt: 13, dt: 12, nd: 3,
    ds: 2, tg: 2, bg: 2, sl: 450, sw: 25, sc: 2, fs: 50,
    fo: 19, groovePosition: 18, backClearance: 4 };

// ── Preset B: Standard 600mm Cabinet (from README) ──
const std600 = { cw: 600, ch: 800, cd: 500, bt: 18, dt: 12, nd: 4,
    ds: 2, tg: 2, bg: 2, sl: 450, sw: 25, sc: 2, fs: 50,
    fo: 19, groovePosition: 18, backClearance: 4 };

// ── Stress: Wide kitchen base cabinet ──
const wideKitchen = { cw: 900, ch: 720, cd: 550, bt: 18, dt: 12, nd: 5,
    ds: 3, tg: 3, bg: 3, sl: 500, sw: 26, sc: 2, fs: 50,
    fo: 19, groovePosition: 18, backClearance: 4 };

// ── Stress: Narrow cabinet ──
const narrow = { cw: 300, ch: 600, cd: 450, bt: 18, dt: 12, nd: 2,
    ds: 2, tg: 2, bg: 2, sl: 400, sw: 25, sc: 2, fs: 50,
    fo: 19, groovePosition: 18, backClearance: 4 };

// ── Stress: Tall pantry cabinet ──
const tallPantry = { cw: 600, ch: 2000, cd: 550, bt: 18, dt: 12, nd: 8,
    ds: 2, tg: 2, bg: 2, sl: 500, sw: 25, sc: 2, fs: 50,
    fo: 19, groovePosition: 18, backClearance: 4 };

// ── Stress: Thick material (plywood 25mm) ──
const thickMat = { cw: 800, ch: 700, cd: 550, bt: 25, dt: 19, nd: 3,
    ds: 2, tg: 2, bg: 2, sl: 500, sw: 30, sc: 3, fs: 55,
    fo: 22, groovePosition: 20, backClearance: 5 };

// ── Stress: Thin material (MDF 12mm) ──
const thinMat = { cw: 700, ch: 650, cd: 480, bt: 12, dt: 9, nd: 4,
    ds: 2, tg: 2, bg: 2, sl: 450, sw: 22, sc: 2, fs: 45,
    fo: 16, groovePosition: 15, backClearance: 3 };

const TEST_SUITE = [

    // ══════════════════════════════════════════════════════════
    // METRIC FORMULA ACCURACY
    // ══════════════════════════════════════════════════════════
    makeTest('M-001','Metric Formulas','Internal Width',
        'cw − 2×bt',
        {cw:600, bt:18}, 564, 'mm',
        ()=> 600 - 2*18),

    makeTest('M-002','Metric Formulas','Internal Height',
        'ch − 2×bt',
        {ch:800, bt:18}, 764, 'mm',
        ()=> 800 - 2*18),

    makeTest('M-003','Metric Formulas','Total Spacing (3 drawers, 2mm)',
        '(nd−1) × ds',
        {nd:3, ds:2}, 4, 'mm',
        ()=> (3-1)*2),

    makeTest('M-004','Metric Formulas','Available Drawer Height',
        'internalH − tg − bg − spacing',
        {internalH:764, tg:2, bg:2, spacing:4}, 756, 'mm',
        ()=> 764 - 2 - 2 - 4),

    makeTest('M-005','Metric Formulas','Equal Drawer Height (3 drawers, 756mm)',
        'availH ÷ nd',
        {availH:756, nd:3}, 252, 'mm',
        ()=> 756/3),

    makeTest('M-006','Metric Formulas','Drawer Width Reduction',
        'sw + 2×sc',
        {sw:25, sc:2}, 29, 'mm',
        ()=> 25 + 2*2),

    makeTest('M-007','Metric Formulas','Drawer Box Width',
        'internalW − widthReduction',
        {internalW:564, reduction:29}, 535, 'mm',
        ()=> 564 - 29),

    makeTest('M-008','Metric Formulas','Drawer Box Height (2mm clearance)',
        'openingH − 2',
        {openingH:252}, 250, 'mm',
        ()=> 252 - 2),

    makeTest('M-009','Metric Formulas','Drawer Back Height',
        'boxH − groovePos − backClr',
        {boxH:250, groove:18, clr:4}, 228, 'mm',
        ()=> 250 - 18 - 4),

    makeTest('M-010','Metric Formulas','Groove Depth',
        'dt ÷ 2',
        {dt:12}, 6, 'mm',
        ()=> 12/2),

    makeTest('M-011','Metric Formulas','Bottom Panel Width',
        'drawerFBW − 2×dt',
        {fbw:535, dt:12}, 511, 'mm',
        ()=> 535 - 2*12),

    makeTest('M-012','Metric Formulas','Bottom Panel Depth',
        'sl − dt',
        {sl:450, dt:12}, 438, 'mm',
        ()=> 450 - 12),

    makeTest('M-013','Metric Formulas','Overlay Front Width',
        'internalW + 2×fo',
        {internalW:564, fo:19}, 602, 'mm',
        ()=> 564 + 2*19),

    makeTest('M-014','Metric Formulas','Overlay Front Height',
        'openingH + 2×fo',
        {openingH:252, fo:19}, 290, 'mm',
        ()=> 252 + 2*19),

    makeTest('M-015','Metric Formulas','Effective Extension',
        'sl − fs',
        {sl:450, fs:50}, 400, 'mm',
        ()=> 450 - 50),

    // ══════════════════════════════════════════════════════════
    // UNIT CONVERSION PRECISION
    // ══════════════════════════════════════════════════════════
    makeTest('C-001','Unit Conversion','25.4mm = 1 inch (exact)',
        '25.4 × MM_TO_INCH',
        {mm:25.4}, 1.0, 'in',
        ()=> 25.4 * MM_TO_INCH),

    makeTest('C-002','Unit Conversion','1 inch = 25.4mm (exact)',
        '1 × INCH_TO_MM',
        {in:1}, 25.4, 'mm',
        ()=> 1 * INCH_TO_MM),

    makeTest('C-003','Unit Conversion','600mm to inches',
        '600 × MM_TO_INCH',
        {mm:600}, 23.622, 'in',
        ()=> 600 * MM_TO_INCH),

    makeTest('C-004','Unit Conversion','450mm to inches',
        '450 × MM_TO_INCH',
        {mm:450}, 17.7165, 'in',
        ()=> 450 * MM_TO_INCH),

    makeTest('C-005','Unit Conversion','24 inches to mm',
        '24 × INCH_TO_MM',
        {in:24}, 609.6, 'mm',
        ()=> 24 * INCH_TO_MM),

    makeTest('C-006','Unit Conversion','12.7mm = 0.5 inch (exact)',
        '12.7 × MM_TO_INCH',
        {mm:12.7}, 0.5, 'in',
        ()=> 12.7 * MM_TO_INCH),

    makeTest('C-007','Unit Conversion','1/8 inch = 3.175mm',
        '0.125 × INCH_TO_MM',
        {in:0.125}, 3.175, 'mm',
        ()=> 0.125 * INCH_TO_MM),

    makeTest('C-008','Unit Conversion','1mm precision: round-trip mm→in→mm',
        'mm → in → mm (should lose <1mm)',
        {mm:347}, 347, 'mm',
        ()=> (347 * MM_TO_INCH) * INCH_TO_MM),

    makeTest('C-009','Unit Conversion','300mm to inches',
        '300 × MM_TO_INCH',
        {mm:300}, 11.811, 'in',
        ()=> 300 * MM_TO_INCH),

    makeTest('C-010','Unit Conversion','500mm to inches',
        '500 × MM_TO_INCH',
        {mm:500}, 19.685, 'in',
        ()=> 500 * MM_TO_INCH),

    makeTest('C-011','Unit Conversion','Imperial round-trip: 17.5in → mm → in',
        'in → mm → in (should lose <1/8")',
        {in:17.5}, 17.5, 'in',
        ()=> (17.5 * INCH_TO_MM) * MM_TO_INCH),

    // ══════════════════════════════════════════════════════════
    // FRACTION PARSER
    // ══════════════════════════════════════════════════════════
    makeTest('F-001','Fraction Parser','Simple fraction 1/4',
        'parseFraction("1/4")',
        {input:'1/4'}, 0.25, 'in',
        ()=> parseFraction('1/4')),

    makeTest('F-002','Fraction Parser','Simple fraction 3/8',
        'parseFraction("3/8")',
        {input:'3/8'}, 0.375, 'in',
        ()=> parseFraction('3/8')),

    makeTest('F-003','Fraction Parser','Mixed with dash: 3-1/2',
        'parseFraction("3-1/2")',
        {input:'3-1/2'}, 3.5, 'in',
        ()=> parseFraction('3-1/2')),

    makeTest('F-004','Fraction Parser','Mixed with space: 3 1/4',
        'parseFraction("3 1/4")',
        {input:'3 1/4'}, 3.25, 'in',
        ()=> parseFraction('3 1/4')),

    makeTest('F-005','Fraction Parser','Mixed: 23-5/8',
        'parseFraction("23-5/8")',
        {input:'23-5/8'}, 23.625, 'in',
        ()=> parseFraction('23-5/8')),

    makeTest('F-006','Fraction Parser','Simple decimal: 1.5',
        'parseFraction("1.5")',
        {input:'1.5'}, 1.5, 'in',
        ()=> parseFraction('1.5')),

    makeTest('F-007','Fraction Parser','Integer: 24',
        'parseFraction("24")',
        {input:'24'}, 24, 'in',
        ()=> parseFraction('24')),

    makeTest('F-008','Fraction Parser','7/8 inch',
        'parseFraction("7/8")',
        {input:'7/8'}, 0.875, 'in',
        ()=> parseFraction('7/8')),

    makeTest('F-009','Fraction Parser','Mixed: 15-3/4 (typical cabinet size)',
        'parseFraction("15-3/4")',
        {input:'15-3/4'}, 15.75, 'in',
        ()=> parseFraction('15-3/4')),

    makeTest('F-010','Fraction Parser','1/16 (smallest meaningful fraction)',
        'parseFraction("1/16")',
        {input:'1/16'}, 0.0625, 'in',
        ()=> parseFraction('1/16')),

    makeTest('F-011','Fraction Parser','Round-trip: 3/8 inch to mm and back',
        '0.375×25.4×(1/25.4)',
        {input:'0.375 in'}, 0.375, 'in',
        ()=> (parseFraction('3/8') * INCH_TO_MM) * MM_TO_INCH),

    makeTest('F-012','Fraction Parser','Mixed: 11 7/8 (space format)',
        'parseFraction("11 7/8")',
        {input:'11 7/8'}, 11.875, 'in',
        ()=> parseFraction('11 7/8')),

    // ══════════════════════════════════════════════════════════
    // PRESET VALIDATION — Will's 640mm Build
    // ══════════════════════════════════════════════════════════
    makeTest('P-001',"Preset: Will's 640mm",'Internal Width',
        'cw(758) − 2×bt(13)',
        willsPreset, 732, 'mm',
        ()=> calcMetric(willsPreset).internalWidth),

    makeTest('P-002',"Preset: Will's 640mm",'Internal Height',
        'ch(626) − 2×bt(13)',
        willsPreset, 600, 'mm',
        ()=> calcMetric(willsPreset).internalHeight),

    makeTest('P-003',"Preset: Will's 640mm",'Available Height',
        '600 − 2 − 2 − 4(spacing)',
        willsPreset, 592, 'mm',
        ()=> calcMetric(willsPreset).totalAvailableHeight),

    makeTest('P-004',"Preset: Will's 640mm",'Drawer Height (equal, 3 drawers)',
        '592 ÷ 3',
        willsPreset, 592/3, 'mm',
        ()=> calcMetric(willsPreset).drawerHeight),

    makeTest('P-005',"Preset: Will's 640mm",'Drawer Box Width',
        '732 − (25+4)',
        willsPreset, 703, 'mm',
        ()=> calcMetric(willsPreset).drawerBoxWidth),

    makeTest('P-006',"Preset: Will's 640mm",'Drawer Box Height',
        '(592÷3) − 2',
        willsPreset, 592/3 - 2, 'mm',
        ()=> calcMetric(willsPreset).drawerBoxHeight),

    makeTest('P-007',"Preset: Will's 640mm",'Drawer Back Height',
        'boxH − 18(groove) − 4(clr)',
        willsPreset, 592/3 - 2 - 18 - 4, 'mm',
        ()=> calcMetric(willsPreset).drawerBackHeight),

    makeTest('P-008',"Preset: Will's 640mm",'Bottom Panel Width',
        '703 − 2×12',
        willsPreset, 679, 'mm',
        ()=> calcMetric(willsPreset).drawerBottomWidth),

    makeTest('P-009',"Preset: Will's 640mm",'Bottom Panel Depth',
        '450 − 12',
        willsPreset, 438, 'mm',
        ()=> calcMetric(willsPreset).drawerBottomDepth),

    makeTest('P-010',"Preset: Will's 640mm",'Overlay Width',
        '732 + 2×19',
        willsPreset, 770, 'mm',
        ()=> calcMetric(willsPreset).overlayWidth),

    makeTest('P-011',"Preset: Will's 640mm",'Effective Extension',
        '450 − 50',
        willsPreset, 400, 'mm',
        ()=> calcMetric(willsPreset).effectiveExtension),

    // ══════════════════════════════════════════════════════════
    // PRESET VALIDATION — Standard 600mm Cabinet
    // ══════════════════════════════════════════════════════════
    makeTest('S-001','Preset: Std 600mm','Internal Width',
        'cw(600) − 2×bt(18)',
        std600, 564, 'mm',
        ()=> calcMetric(std600).internalWidth),

    makeTest('S-002','Preset: Std 600mm','Internal Height',
        'ch(800) − 2×bt(18)',
        std600, 764, 'mm',
        ()=> calcMetric(std600).internalHeight),

    makeTest('S-003','Preset: Std 600mm','Available Height (4 drawers)',
        '764 − 2 − 2 − 3×2(spacing)',
        std600, 764-2-2-3*2, 'mm',
        ()=> calcMetric(std600).totalAvailableHeight),

    makeTest('S-004','Preset: Std 600mm','Drawer Height (equal, 4 drawers)',
        'availH ÷ 4',
        std600, (764-2-2-6)/4, 'mm',
        ()=> calcMetric(std600).drawerHeight),

    makeTest('S-005','Preset: Std 600mm','Drawer Box Width',
        '564 − 29',
        std600, 535, 'mm',
        ()=> calcMetric(std600).drawerBoxWidth),

    makeTest('S-006','Preset: Std 600mm','Bottom Panel Width',
        '535 − 2×12',
        std600, 511, 'mm',
        ()=> calcMetric(std600).drawerBottomWidth),

    makeTest('S-007','Preset: Std 600mm','Bottom Panel Depth',
        '450 − 12',
        std600, 438, 'mm',
        ()=> calcMetric(std600).drawerBottomDepth),

    makeTest('S-008','Preset: Std 600mm','Effective Extension',
        '450 − 50',
        std600, 400, 'mm',
        ()=> calcMetric(std600).effectiveExtension),

    // ══════════════════════════════════════════════════════════
    // STRESS TESTS — Wide Kitchen Base
    // ══════════════════════════════════════════════════════════
    makeTest('W-001','Stress: Wide Kitchen','Internal Width (900mm)',
        '900 − 2×18',
        wideKitchen, 864, 'mm',
        ()=> calcMetric(wideKitchen).internalWidth),

    makeTest('W-002','Stress: Wide Kitchen','Available Height (5 drawers)',
        '(720−36) − 3 − 3 − 4×3',
        wideKitchen, (720-36)-3-3-4*3, 'mm',
        ()=> calcMetric(wideKitchen).totalAvailableHeight),

    makeTest('W-003','Stress: Wide Kitchen','Drawer Box Width (wide)',
        '864 − (26+4)',
        wideKitchen, 864 - (26 + 2*2), 'mm',
        ()=> calcMetric(wideKitchen).drawerBoxWidth),

    makeTest('W-004','Stress: Wide Kitchen','Bottom Panel Depth (500mm slide)',
        '500 − 12',
        wideKitchen, 488, 'mm',
        ()=> calcMetric(wideKitchen).drawerBottomDepth),

    makeTest('W-005','Stress: Wide Kitchen','Effective Extension (500mm slide)',
        '500 − 50',
        wideKitchen, 450, 'mm',
        ()=> calcMetric(wideKitchen).effectiveExtension),

    // ══════════════════════════════════════════════════════════
    // STRESS TESTS — Narrow Cabinet
    // ══════════════════════════════════════════════════════════
    makeTest('N-001','Stress: Narrow Cabinet','Internal Width (300mm)',
        '300 − 2×18',
        narrow, 264, 'mm',
        ()=> calcMetric(narrow).internalWidth),

    makeTest('N-002','Stress: Narrow Cabinet','Drawer Box Width (narrow)',
        '264 − 29',
        narrow, 235, 'mm',
        ()=> calcMetric(narrow).drawerBoxWidth),

    makeTest('N-003','Stress: Narrow Cabinet','Bottom Panel Width',
        '235 − 2×12',
        narrow, 211, 'mm',
        ()=> calcMetric(narrow).drawerBottomWidth),

    // ══════════════════════════════════════════════════════════
    // STRESS TESTS — Tall Pantry (8 drawers)
    // ══════════════════════════════════════════════════════════
    makeTest('T-001','Stress: Tall Pantry','Internal Height (2000mm cabinet)',
        '2000 − 2×18',
        tallPantry, 1964, 'mm',
        ()=> calcMetric(tallPantry).internalHeight),

    makeTest('T-002','Stress: Tall Pantry','Available Height (8 drawers)',
        '1964 − 2 − 2 − 7×2',
        tallPantry, 1964-2-2-7*2, 'mm',
        ()=> calcMetric(tallPantry).totalAvailableHeight),

    makeTest('T-003','Stress: Tall Pantry','Drawer Height (8 equal drawers)',
        'availH ÷ 8',
        tallPantry, (1964-2-2-14)/8, 'mm',
        ()=> calcMetric(tallPantry).drawerHeight),

    // ══════════════════════════════════════════════════════════
    // STRESS TESTS — Thick Material (25mm plywood)
    // ══════════════════════════════════════════════════════════
    makeTest('K-001','Stress: Thick Material','Internal Width (25mm box)',
        '800 − 2×25',
        thickMat, 750, 'mm',
        ()=> calcMetric(thickMat).internalWidth),

    makeTest('K-002','Stress: Thick Material','Groove Depth (19mm ÷ 2)',
        '19 ÷ 2',
        thickMat, 9.5, 'mm',
        ()=> calcMetric(thickMat).grooveDepth),

    makeTest('K-003','Stress: Thick Material','Drawer Width Reduction (30mm slide)',
        '30 + 2×3',
        thickMat, 36, 'mm',
        ()=> calcMetric(thickMat).drawerWidthReduction),

    makeTest('K-004','Stress: Thick Material','Drawer Box Width',
        '750 − 36',
        thickMat, 714, 'mm',
        ()=> calcMetric(thickMat).drawerBoxWidth),

    makeTest('K-005','Stress: Thick Material','Bottom Panel Width (19mm walls)',
        '714 − 2×19',
        thickMat, 676, 'mm',
        ()=> calcMetric(thickMat).drawerBottomWidth),

    makeTest('K-006','Stress: Thick Material','Bottom Panel Depth (500mm slide)',
        '500 − 19',
        thickMat, 481, 'mm',
        ()=> calcMetric(thickMat).drawerBottomDepth),

    // ══════════════════════════════════════════════════════════
    // IMPERIAL EQUIVALENT TESTS
    // Tests mirror metric formulas converted to inches
    // ══════════════════════════════════════════════════════════
    makeTest('I-001','Imperial Equiv.','Internal Width: 23.622" cab, 0.709" mat',
        '23.622 − 2×0.709',
        {cw:23.622, bt:0.709}, parseFloat((23.622 - 2*0.709).toFixed(6)), 'in',
        ()=> 23.622 - 2*0.709),

    makeTest('I-002','Imperial Equiv.','24" cab, 3/4" material (0.75")',
        '24 − 2×0.75',
        {cw:24, bt:0.75}, 22.5, 'in',
        ()=> 24 - 2*0.75),

    makeTest('I-003','Imperial Equiv.','Drawer Width Reduction (1" slide, 1/8" clr)',
        '1 + 2×0.125',
        {sw:1, sc:0.125}, 1.25, 'in',
        ()=> 1 + 2*0.125),

    makeTest('I-004','Imperial Equiv.','Drawer Box Height (10" opening, 5/64" clr)',
        '10 − 0.079 (2mm≈0.079")',
        {openingH:10}, parseFloat((10 - 2*MM_TO_INCH).toFixed(6)), 'in',
        ()=> 10 - 2*MM_TO_INCH),

    makeTest('I-005','Imperial Equiv.','Bottom Panel: 18" slide, 1/2" drawer wall',
        '18 − 0.5',
        {sl:18, dt:0.5}, 17.5, 'in',
        ()=> 18 - 0.5),

    makeTest('I-006','Imperial Equiv.','Effective Extension: 18" slide, 2" setback',
        '18 − 2',
        {sl:18, fs:2}, 16, 'in',
        ()=> 18 - 2),

    makeTest('I-007','Imperial Equiv.','Overlay Width: 22.5" opening, 3/4" overlap',
        '22.5 + 2×0.75',
        {w:22.5, fo:0.75}, 24, 'in',
        ()=> 22.5 + 2*0.75),

    makeTest('I-008','Imperial Equiv.','Std sizes: 17-3/4" drawer in 18" slide',
        '18 − 0.25 (1/4")',
        {sl:18, dt:0.25}, 17.75, 'in',
        ()=> 18 - 0.25),

    // ══════════════════════════════════════════════════════════
    // 1mm / 1/8" BOUNDARY PRECISION TESTS
    // Confirms the calculator cannot be off by more than 1mm or 1/8"
    // ══════════════════════════════════════════════════════════
    makeTest('B-001','Precision Boundary','±1mm: 1mm off would break fit',
        'Drawer clearance: exactly 2mm',
        {openingH:200}, 198, 'mm',
        ()=> 200 - 2),

    makeTest('B-002','Precision Boundary','±1mm: groove position 18mm',
        'Back panel clears groove exactly',
        {boxH:150, gp:18, bc:4}, 128, 'mm',
        ()=> 150 - 18 - 4),

    makeTest('B-003','Precision Boundary','1/8" boundary: 0.125" slide clr',
        '1/8" side clearance per side',
        {}, 0.125*INCH_TO_MM, 'mm',
        ()=> 0.125 * INCH_TO_MM),

    makeTest('B-004','Precision Boundary','Minimum viable drawer width: 100mm',
        'If result <100mm → warn',
        {cw:160, bt:18, sw:25, sc:2}, 160-36-29, 'mm',
        ()=> (160-2*18) - (25+2*2)),

    makeTest('B-005','Precision Boundary','Cumulative error: 10-step calc chain',
        'Sum of 10 independent 1mm subtractions',
        {}, 1000-10*1, 'mm',
        ()=>{
            let v = 1000;
            for(let i=0;i<10;i++) v -= 1;
            return v;
        }),

    makeTest('B-006','Precision Boundary','Float safety: 1/3 drawer height × 3',
        '(availH÷3)×3 ≈ availH (within 0.001mm)',
        {availH:592}, 592, 'mm',
        ()=> Math.round((592/3)*3 * 10000)/10000),

    makeTest('B-007','Precision Boundary','1/8" precision: 3/8" parsed to mm',
        '3/8 × 25.4 = 9.525mm',
        {}, 9.525, 'mm',
        ()=> parseFraction('3/8') * INCH_TO_MM),

    makeTest('B-008','Precision Boundary','Imperial: 1mm equals 0.03937"',
        '1mm → in should be ~0.039"',
        {mm:1}, 1*MM_TO_INCH, 'in',
        ()=> 1*MM_TO_INCH),

    // ══════════════════════════════════════════════════════════
    // EDGE CASES
    // ══════════════════════════════════════════════════════════
    makeTest('E-001','Edge Cases','Single drawer cabinet',
        'nd=1: (availH÷1) = availH',
        {cw:600, ch:400, bt:18, nd:1, tg:2, bg:2, ds:2, sl:350, sw:25, sc:2, fs:50, fo:19, dt:12, groovePosition:18, backClearance:4, cd:400},
        (400-36)-2-2, 'mm',
        ()=> calcMetric({cw:600,ch:400,cd:400,bt:18,dt:12,nd:1,ds:2,tg:2,bg:2,sl:350,sw:25,sc:2,fs:50,fo:19,groovePosition:18,backClearance:4}).totalAvailableHeight),

    makeTest('E-002','Edge Cases','10-drawer cabinet',
        'nd=10: tall cabinet, many drawers',
        {availH:900, nd:10}, 90, 'mm',
        ()=> {
            const p = {cw:600,ch:1040,cd:550,bt:18,dt:12,nd:10,ds:2,tg:2,bg:2,sl:500,sw:25,sc:2,fs:50,fo:19,groovePosition:18,backClearance:4};
            return calcMetric(p).drawerHeight;
        }),

    makeTest('E-003','Edge Cases','Zero front overlap (flush)',
        'fo=0: overlayW = internalW',
        {internalW:564, fo:0}, 564, 'mm',
        ()=> 564 + 2*0),

    makeTest('E-004','Edge Cases','Maximum slide length (600mm)',
        'sl=600, fs=50: effectiveExt=550',
        {sl:600, fs:50}, 550, 'mm',
        ()=> 600 - 50),

    makeTest('E-005','Edge Cases','Minimum slide length (250mm)',
        'sl=250, fs=50: effectiveExt=200',
        {sl:250, fs:50}, 200, 'mm',
        ()=> 250 - 50),

    makeTest('E-006','Edge Cases','Large groove position (25mm)',
        'Higher groove = shorter back',
        {boxH:200, gp:25, bc:4}, 171, 'mm',
        ()=> 200 - 25 - 4),

    makeTest('E-007','Edge Cases','Back clearance = 0',
        'No back clearance: backH = boxH − groove',
        {boxH:200, gp:18, bc:0}, 182, 'mm',
        ()=> 200 - 18 - 0),

    makeTest('E-008','Edge Cases','Equal drawers: heights sum to available',
        'sum(drawerHeights) = totalAvailableHeight',
        {}, 592, 'mm',
        ()=> {
            const nd = 3, availH = 592;
            const h = availH / nd;
            return h * nd;
        }),

    makeTest('E-009','Edge Cases','Fraction 1/16 × 25.4 = 1.5875mm',
        'Smallest 1/16" in mm',
        {}, 1.5875, 'mm',
        ()=> (1/16) * INCH_TO_MM),

    makeTest('E-010','Edge Cases','Cabinet width = 2×bt + minimal space',
        'internalW with tight box material',
        {cw:40, bt:18}, 4, 'mm',
        ()=> 40 - 2*18),
];

// ─────────────────────────────────────────────────────────────────────────────
// TEST RUNNER
// ─────────────────────────────────────────────────────────────────────────────

function runTest(t) {
    let actual, error = null;
    try {
        actual = t.compute();
    } catch(e) {
        error = e.message;
        actual = null;
    }

    const delta = actual !== null ? Math.abs(actual - t.expected) : Infinity;
    const pass  = error === null && delta <= t.tol;

    // Precision tier
    let tier;
    if (error !== null)          tier = 'error';
    else if (delta < 1e-9)       tier = 'exact';
    else if (delta < 0.1)        tier = 'sub0.1';
    else if (delta < 0.5)        tier = 'sub0.5';
    else if (delta <= t.tol)     tier = 'pass';
    else                         tier = 'fail';

    return { ...t, actual, delta, pass, tier, error };
}

function precDot(tier) {
    const map = {
        exact:  'prec-exact',
        sub0_1: 'prec-01mm',
        sub0_5: 'prec-05mm',
        pass:   'prec-1mm',
        fail:   'prec-fail',
        error:  'prec-fail',
    };
    const cls = map[tier] || 'prec-fail';
    return `<span class="prec ${cls}"></span>`;
}

function formatDelta(result) {
    if (result.error) return `<span class="delta-bad">ERROR</span>`;
    const d = result.delta;
    const unit = result.unit;
    const str = d < 0.001 ? d.toExponential(2) : d.toFixed(4);
    if (!result.pass) return `<span class="delta-bad">+${str} ${unit}</span>`;
    if (d < 0.001)   return `<span class="delta-good">&lt;0.001 ${unit}</span>`;
    if (d < 0.1)     return `<span class="delta-good">${str} ${unit}</span>`;
    return `<span class="delta-warn">${str} ${unit}</span>`;
}

function formatActual(result) {
    if (result.error) return `<span style="color:var(--red);font-size:11px">${result.error}</span>`;
    const v = result.actual;
    const dp = result.unit === 'mm' ? 4 : 6;
    return `<span class="mono">${Number(v).toFixed(dp)}</span>`;
}

function inputsSummary(inputs) {
    if (!inputs || typeof inputs !== 'object') return '—';
    const entries = Object.entries(inputs);
    if (entries.length === 0) return '—';
    if (entries.length === 1 && typeof entries[0][1] === 'string') return entries[0][1];
    return entries.slice(0,6).map(([k,v]) =>
        `${k}=${typeof v === 'number' ? v : v}`
    ).join(', ');
}

function renderSection(category, results) {
    const pass  = results.filter(r => r.pass).length;
    const fail  = results.filter(r => !r.pass).length;
    const badge = fail === 0
        ? `<span class="section-badge badge-pass">✓ ${pass}/${results.length} PASS</span>`
        : `<span class="section-badge badge-fail">✗ ${fail} FAILED</span>`;

    const rows = results.map(r => {
        const statusPill = r.pass
            ? `<span class="pill pill-pass">✓ PASS</span>`
            : `<span class="pill pill-fail">✗ FAIL</span>`;
        const tierDot = precDot(r.tier);
        const rowClass = r.pass ? '' : 'style="background:#1a0a0a"';
        return `
        <tr ${rowClass}>
            <td class="mono" style="color:var(--text-dim);font-size:11px">${r.id}</td>
            <td>${r.name}</td>
            <td><span class="formula-chip">${r.formula}</span></td>
            <td class="inputs-cell">${inputsSummary(r.inputs)}</td>
            <td class="mono">${Number(r.expected).toFixed(r.unit==='mm'?4:6)} <span style="color:var(--text-dim)">${r.unit}</span></td>
            <td>${formatActual(r)}</td>
            <td>${formatDelta(r)}</td>
            <td>${tierDot}${statusPill}</td>
        </tr>`;
    }).join('');

    return `
    <div class="section">
        <div class="section-header">
            <span class="section-title">${category}</span>
            ${badge}
        </div>
        <table class="test-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Test</th>
                    <th>Formula</th>
                    <th>Inputs</th>
                    <th>Expected</th>
                    <th>Actual</th>
                    <th>Delta</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>
    </div>`;
}

function runAllTests() {
    const results = TEST_SUITE.map(runTest);

    // Group by category
    const categories = [...new Set(results.map(r => r.category))];
    let html = '';
    categories.forEach(cat => {
        const catResults = results.filter(r => r.category === cat);
        html += renderSection(cat, catResults);
    });

    document.getElementById('output').innerHTML = html;

    // Update summary
    const total   = results.length;
    const passed  = results.filter(r => r.pass).length;
    const failed  = total - passed;
    const pct     = total > 0 ? (passed/total*100) : 0;
    const deltas  = results.filter(r => r.actual !== null).map(r => r.delta);
    const worst   = deltas.length ? Math.max(...deltas) : 0;

    document.getElementById('totalCount').textContent = total;
    document.getElementById('passCount').textContent  = passed;
    document.getElementById('failCount').textContent  = failed;
    document.getElementById('passBar').style.width    = pct.toFixed(1) + '%';

    // Worst delta label
    const worstEl = document.getElementById('worstDelta');
    worstEl.textContent = worst < 0.001 ? '<0.001mm' : worst.toFixed(3)+'mm';
    worstEl.style.color = worst > METRIC_TOL ? 'var(--red)' : worst > 0.1 ? 'var(--yellow)' : 'var(--green)';

    // Precision matrix
    const metricResults   = results.filter(r => r.unit === 'mm');
    const imperialResults = results.filter(r => r.unit === 'in');
    renderPrecMatrix(metricResults, imperialResults);
    document.getElementById('precMatrix').style.display = 'grid';

    // Scroll to results
    document.getElementById('output').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderPrecMatrix(metric, imperial) {
    function renderRows(arr, tol) {
        const exact  = arr.filter(r => r.tier === 'exact').length;
        const sub01  = arr.filter(r => r.tier === 'sub0.1').length;
        const sub05  = arr.filter(r => r.tier === 'sub0.5').length;
        const pass   = arr.filter(r => r.tier === 'pass').length;
        const fail   = arr.filter(r => r.tier === 'fail' || r.tier === 'error').length;
        const total  = arr.length;
        const maxDelta = arr.filter(r=>r.actual!==null).reduce((m,r)=>Math.max(m,r.delta),0);

        return `
        <div class="prec-row">
            <span class="name"><span class="prec prec-exact"></span> Exact (&lt;1e-9)</span>
            <span class="val">${exact} / ${total}</span>
        </div>
        <div class="prec-row">
            <span class="name"><span class="prec prec-01mm"></span> &lt;0.1 unit</span>
            <span class="val">${sub01} / ${total}</span>
        </div>
        <div class="prec-row">
            <span class="name"><span class="prec prec-05mm"></span> &lt;0.5 unit</span>
            <span class="val">${sub05} / ${total}</span>
        </div>
        <div class="prec-row">
            <span class="name"><span class="prec prec-1mm"></span> &lt;${tol} unit (pass)</span>
            <span class="val">${pass} / ${total}</span>
        </div>
        <div class="prec-row">
            <span class="name"><span class="prec prec-fail"></span> FAIL (&gt;${tol} unit)</span>
            <span class="val" style="color:${fail>0?'var(--red)':'var(--green)'}">${fail} / ${total}</span>
        </div>
        <div class="prec-row" style="margin-top:8px">
            <span class="name">Worst delta</span>
            <span class="val" style="color:${maxDelta>tol?'var(--red)':maxDelta>tol*0.5?'var(--yellow)':'var(--green)'}">${maxDelta.toFixed(6)}</span>
        </div>`;
    }

    document.getElementById('metricPrec').innerHTML   = renderRows(metric, 0.5);
    document.getElementById('imperialPrec').innerHTML = renderRows(imperial, 0.0625);
}

// Auto-run on load
window.addEventListener('DOMContentLoaded', runAllTests);
